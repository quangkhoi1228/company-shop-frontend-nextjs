import { LOAD_DATA_PRODUCT } from 'redux/actions/productAction';

export interface ProductDataState {
  product_name: string;
  product_descriptions: string;
  product_tag: string;
  product_category: string;
  product_price: string;
  product_vote: number;
  create_at: number;
  year_of_manufacture: number;
  thumpnail: string;
  id: string;
}
const initialState: ProductDataState[] = [];

const productDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_DATA_PRODUCT: {
      return {
        ...state,
        isActive: true,
      };
    }
    // case CLOSE_ORDER_PLACING_MODAL: {
    //   return {
    //     ...state,
    //     isActive: false,
    //   };
    // }

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

export default productDataReducer;
