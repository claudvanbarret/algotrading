import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface RequestConfig extends AxiosRequestConfig {}

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface Response<T> extends AxiosResponse<T> {}

class RequestService {
  public static get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return axiosInstance.get<T, Response<T>>(url, config);
  }

  public static post<T>(url: string, data?: unknown, config?: RequestConfig): Promise<Response<T>> {
    return axiosInstance.post<T, Response<T>>(url, data, config);
  }

  public static put<T>(url: string, data?: unknown, config?: RequestConfig): Promise<Response<T>> {
    return axiosInstance.put<T, Response<T>>(url, data, config);
  }

  public static patch<T>(url: string, data?: unknown, config?: RequestConfig): Promise<Response<T>> {
    return axiosInstance.patch<T, Response<T>>(url, data, config);
  }

  public static delete<T>(url: string, data?: unknown, config?: RequestConfig): Promise<Response<T>> {
    const parsedConfig: RequestConfig = config ?? {};
    parsedConfig.data = data;

    return axiosInstance.delete<T, Response<T>>(url, parsedConfig);
  }
}

export default RequestService;
