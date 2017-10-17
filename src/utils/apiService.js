/**
 * Created by xuejian.xu on 2017/8/10.
 */

import axios from 'axios';

axios.interceptors.request.use((config)=>{
    Object.assign(config, {
        url : CONFIG.host + config.url
    })

    return config;
})

axios.interceptors.response.use((res)=>{
    const {data} = res;

    return data;
}, (error)=>{
    alert('网络异常，请检查网络连接');
});

export {axios};
