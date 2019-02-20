import Axios, { AxiosInstance, AxiosResponse} from 'axios'
/**
 * @file: 
 * @module: http模块拦截
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import {config} from 'src/config';
import {IConfigOrigin, IGetParams} from 'src/interfaces/http.interface';

class HttpClient {
   public axios:AxiosInstance;
   public origin: string;
   
    constructor (
      readonly configOrigin: IConfigOrigin) {
      this.origin= configOrigin.origin
      this.axios = Axios.create({
        timeout: 10000
      })

      // 拦截处理返回内容 
      // todo 给出错误提示
      this.axios.interceptors.response.use((response: AxiosResponse):any => {
        if (response.data.status === 'Success') {
          return response.data.result
        }
      });

    }


    public async get (param:IGetParams): Promise<any>{
      return this.AXIOS_REQUEST('GET', param)
    }    


    public async post (param:IGetParams): Promise<any>{
      return this.AXIOS_REQUEST('POST', param)
    }    

    public async put (param:IGetParams): Promise<any>{
      return this.AXIOS_REQUEST('PUT', param)
    }  
    
    public async AXIOS_REQUEST(method: string, param:IGetParams): Promise<any> {
      return await this.axios({
        baseURL: this.origin,
        url: param.url,
        method,
        params: {
          ...param.param
        },
        data: {
          ...param.data
        }
      })
    }
}

export default new HttpClient(config)
