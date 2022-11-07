import {
  CLOSE_SHOP_BY_PRODUCT,
  OPEN_SHOP_BY_PRODUCT,
} from 'redux/actions/shopByProductAction';

export interface ShopByProductState {
  isActive: boolean;
}
const initialState: ShopByProductState = {
  isActive: false,
};

const shopByProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_SHOP_BY_PRODUCT: {
      return {
        ...state,
        isActive: true,
      };
    }

    case CLOSE_SHOP_BY_PRODUCT: {
      return {
        ...state,
        isActive: false,
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

export default shopByProductReducer;
