import { queryHeroList, getHeroDetails, getFreeHeros } from '@/services/api';
import { Effect } from '@/models/connect';
import { Reducer } from 'redux';
import { Subscription } from 'dva';

export interface HeroModelState {
  filterKey: number;
  heros: [];
  freeheros: [];
  itemHover: number;
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<HeroModelState>;
  };
  subscriptions: { setup: Subscription };
}


const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    filterKey: 0,
    heros: [],
    freeheros: [],
    itemHover: 0,
  },

  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const herolist = yield call(queryHeroList);
      const herodetails = yield call(getHeroDetails, { ename: 110 });
      const freeheros = yield call(getFreeHeros, { number: 13 });
      console.log(herodetails);

      yield put({
        type: 'save',
        payload: {
          heros: herolist,
          freeheros: freeheros
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch'
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

export default HeroModel;
