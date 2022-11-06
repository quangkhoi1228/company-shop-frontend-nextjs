import axios, { AxiosRequestConfig } from 'axios';
import Json from 'types/Json';
// import { errorNotification } from 'components/Template/Notification';
import useLocalStorage from './useLocalStorage';

interface Props {
  params?: { [key: string]: any };
  onSuccess: Function;
  onFinally?: Function;
  authen?: boolean;
  accessToken?: string;
  onError?: Function;
}

function getConfig({
  authen,
  params,
  accessToken,
}: {
  authen?: boolean;
  params?: Json;
  accessToken?: string;
}) {
  let config: AxiosRequestConfig = {};
  config.headers = {};
  if (authen) {
    if (!accessToken) {
      accessToken = useLocalStorage.getItem('accessToken');
    }
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      if (window.location.pathname !== '/login') {
        window.location.pathname = '/login';
      }
    }
  }

  if (params) {
    config.params = params;
  }

  return config;
}

function handleError(error: any) {
  const responseData = error.response.data;
  const message = responseData.message ?? responseData.errors[0];
  console.log(error);
  if (error.response.status === 401) {
    window.location.pathname = '/login';
  } else {
    alert(message);
  }
}

function get(
  url: string,
  { authen, params, onSuccess, onFinally, onError, accessToken }: Props
) {
  const config = getConfig({ authen, params, accessToken });
  axios
    .get(`${process.env.REACT_APP_API_DOMAIN}${url}`, config)
    .then((res) => {
      const data: Json = res.data;
      onSuccess(data);
    })
    .catch((error) => {
      if (onError) onError(error);
      else handleError(error);
    })
    .finally(() => (onFinally ? onFinally() : () => {}));
}

function post(url: string, { authen, params, onSuccess, onFinally }: Props) {
  const config = getConfig({ authen });

  axios
    .post(
      url.startsWith('http')
        ? url
        : `${process.env.REACT_APP_API_DOMAIN}${url}`,
      params,
      config
    )
    .then((res) => {
      const data: { [key: string]: any } = res.data;
      onSuccess(data);
    })
    .catch((error) => {
      handleError(error);
    })
    .finally(() => onFinally && onFinally());
}

function put(url: string, { authen, params, onSuccess, onFinally }: Props) {
  const config = getConfig({ authen, params });

  delete config.params;
  config.method = 'put';

  axios
    .put(
      url.startsWith('http')
        ? url
        : `${process.env.REACT_APP_API_DOMAIN}${url}`,
      params,
      config
    )
    .then((res) => {
      const data: { [key: string]: any } = res.data;
      onSuccess(data);
    })
    .catch((error) => {
      handleError(error);
    })
    .finally(() => onFinally && onFinally());
}

function detele(url: string, { authen, params, onSuccess, onFinally }: Props) {
  const config = getConfig({ authen });

  axios
    .delete(
      url.startsWith('http')
        ? url
        : `${process.env.REACT_APP_API_DOMAIN}${url}`,
      config
    )
    .then((res) => {
      const data: { [key: string]: any } = res.data;
      onSuccess(data);
    })
    .catch((error) => {
      handleError(error);
    })
    .finally(() => onFinally && onFinally());
}

function multipart(url: string, file: File, callback: Function) {
  axios({
    method: 'put',
    url: url,
    data: file,
    headers: {
      'Content-Type': file.type,
    },
  }).then((data) => {
    if (data.status === 200) callback(data);
  });
}

function setJwtData(data: { [key: string]: any }) {
  useLocalStorage.setItem('accessToken', data.accessToken);
  useLocalStorage.setItem('refreshToken', data.refreshToken);
  useLocalStorage.setItem('transactionTime', data.transactionTime);
}

function removeJwtData() {
  useLocalStorage.removeItem('accessToken');
  useLocalStorage.removeItem('refreshToken');
  useLocalStorage.removeItem('transactionTime');
}

const useApi = {
  get,
  post,
  put,
  detele,
  multipart,
  setJwtData,
  removeJwtData,
};

export default useApi;
