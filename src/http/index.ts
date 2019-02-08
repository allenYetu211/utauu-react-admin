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

      this.axios.interceptors.response.use((response: AxiosResponse):any => {
        if (response.data.status === 'Success') {
          return response.data.result
        }
      });

    }


    public async get (param:IGetParams): Promise<any>{
      return await this.axios.get(`${this.origin}/${param.url}`);
    }    
}

export default new HttpClient(config)
