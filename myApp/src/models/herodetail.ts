import { getHeroDetails } from '@/services/api';

import { Effect } from '@/models/connect';
import { Reducer } from 'redux';
import { Subscription } from 'dva';
export interface HerodetailModelState {
  herodetails: object;
}

export interface HerodetailModelType {
  namespace: 'herodetail';
  state: HerodetailModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HerodetailModelState>;
  };
  subscriptions: { setup: Subscription };
}


const HerodetailModel: HerodetailModelType = {
  namespace: 'herodetail',

  state: {
    herodetails: {}
  },

  effects: {
    *query({ payload }, { call, put, select }) {
      const data = yield call(getHeroDetails, payload);
      yield put({
        type: 'save',
        payload: { herodetails: data },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('herodetail')) {
          const urls = pathname.split('/');
          dispatch({
            type: 'query',
            payload: {
              ename: urls[urls.length - 1]
            }
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

export default HerodetailModel;
