import { API_URL } from '../constants';
import { GetApiUrl } from './types';

export function createGetApiUrl(rootUrlPath: string): GetApiUrl {
  return (...urlComponents: Array<string | number>): string => {
    const urlPath = `/${urlComponents.join('/')}`;

    return `${API_URL}/${rootUrlPath}${urlPath}`;
  };
}
