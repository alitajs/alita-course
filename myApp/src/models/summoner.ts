import { querySummoner } from '@/services/api';

import { Effect } from '@/models/connect';
import { Reducer } from 'redux';
import { Subscription } from 'dva';
export interface SummonerModelState {
  name: string;
  summoners:[]
}

export interface SummonerModelType {
  namespace: 'summoner';
  state: SummonerModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save:  Reducer<SummonerModelState>;
  };
  subscriptions: { setup: Subscription };
}


const SummonerModel: SummonerModelType = {
  namespace: 'summoner',

  state: {
    name: '',
    summoners:[]
  },

  effects: {
    *query({ payload }, { call, put, select }) {
      const summonerlist = yield call(querySummoner);
      yield put({
        type: 'save',
        payload: {
          summoners: summonerlist,
        },
      });

    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/summoner') {
          dispatch({
            type: 'query'
          })
        }
      });
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default SummonerModel;
