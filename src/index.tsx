/**
 * @file:   入口文件
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BrowserRouters from './routes/index';
import {Provider} from 'mobx-react';
import store from 'src/store';
import './asset/style/global.scss';

import registerServiceWorker from './registerServiceWorker';

const appStore = {
  store
};

ReactDOM.render(
  <Provider {...appStore}>
    <BrowserRouters/>
</Provider>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
