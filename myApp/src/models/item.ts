import { queryItem } from '@/services/api';

import { Effect } from '@/models/connect';
import { Reducer } from 'redux';
import { Subscription } from 'dva';
export interface ItemModelState {
  name: string;
  items:[];
}

export interface ItemModelType {
  namespace: 'item';
  state: ItemModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save:  Reducer<ItemModelState>;
  };
  subscriptions: { setup: Subscription };
}


const ItemModel: ItemModelType = {
  namespace: 'item',

  state: {
    name: '',
    items:[]
  },

  effects: {
    *query({ payload }, { call, put, select }) {
      const itemlist = yield call(queryItem);
      yield put({
        type: 'save',
        payload: {
          items: itemlist,
        },
      });
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/item') {
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

export default ItemModel;
