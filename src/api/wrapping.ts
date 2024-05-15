import {client} from './client';
import {logApi} from './utils';

const apiGet: <T = any>(props: ApiProps) => Promise<T> = async (
  props: ApiProps,
) => {
  try {
    const fullResponse = props?.fullResponse ?? false;
    const resHeaders = props?.resHeaders ?? false;
    const res = await client.get(props?.url, {
      ...props.config,
      headers: props?.headers,
    });

    logApi({
      nameFunction: 'apiGet',
      tags: props?.tags,
      body: props?.body,
      res: res,
    });

    return Promise.resolve(
      fullResponse ? res : resHeaders ? res?.headers : res?.data,
    );
  } catch (e: any) {
    if ((props.retry ?? 0) > 0) {
      return await apiGet({...props, retry: props.retry ? props.retry - 1 : 0});
    }

    logApi({
      nameFunction: 'apiGet',
      tags: props?.tags,
      body: props?.body,
      e: e,
    });

    const errorData = e?.response?.data?.message || 'Terjadi Kesalahan';
    return Promise.reject(errorData);
  }
};

export {apiGet};
