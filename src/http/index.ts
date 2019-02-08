import axios, { AxiosInstance} from 'axios'
import {config} from 'src/config';
import {IConfigOrigin, IGetParams} from 'src/asset/interfaces/http.interface';

class HttpClient {
   public axios:AxiosInstance;
   public origin: string;
   
    constructor (
      readonly configOrigin: IConfigOrigin) {
      this.origin= configOrigin.origin
      this.axios = axios.create()

      this.axios.interceptors.request.use(<AxiosResponse>(response: AxiosResponse):any => {
        console.log('response', response);
      });

    }


    public async get (param:IGetParams): Promise<any>{
      return await axios.get(`${this.origin}/${param.url}`);
    }    
}

export default new HttpClient(config)
