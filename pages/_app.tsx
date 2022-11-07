import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import configureStore from 'redux/store/configureStore';
import '../styles/scss/main.scss';

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default function App({ Component, pageProps }: AppProps) {
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
