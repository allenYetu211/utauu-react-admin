/**
 * @file:   入口文件
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BrowserRouters from './routes/index'

import './asset/style/global.scss'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouters />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
