import {
  DOCUMENT_ALLOW_SCROLL,
  DOCUMENT_DENY_SCROLL,
} from 'redux/actions/documentAction';

export interface DocumentState {
  scrollable: boolean;
}
const initialState: DocumentState = {
  scrollable: true,
};

const documentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DOCUMENT_DENY_SCROLL: {
      return {
        ...state,
        scrollable: false,
      };
    }

    case DOCUMENT_ALLOW_SCROLL: {
      return {
        ...state,
        scrollable: true,
      };
    }

    // case SET_PRODUCT_ITEM_ORDER_PLACING: {
    //   return {
    //     ...state,
    //     productItem: action.payload.productItem,
    //     isActive: true,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default documentReducer;
