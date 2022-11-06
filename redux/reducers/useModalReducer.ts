import { CLOSE_USE_MODAL, OPEN_USE_MODAL } from 'redux/actions/useModalAction';

export interface UseModalInfoState {
  isActive: boolean;
  info: {
    title?: string;
    content?: any;
  };
}
const initialState: UseModalInfoState = {
  isActive: false,
  info: {
    title: 'Xác nhận',
    content: 'Bạn chắc chắn',
  },
};

export default function reduxSagaReducer(state = initialState, action: any) {
  switch (action.type) {
    case OPEN_USE_MODAL: {
      return {
        ...state,
        isActive: true,
      };
    }
    case CLOSE_USE_MODAL: {
      return {
        ...state,
        isActive: false,
      };
    }

    default: {
      return state;
    }
  }
}
