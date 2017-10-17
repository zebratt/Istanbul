import { config } from 'utils/config';
import { axios } from 'utils/apiService';
import store from '../store';

export function init() {
    window.CONFIG = config;
    window.axios = axios;
    window.store = store;
}
