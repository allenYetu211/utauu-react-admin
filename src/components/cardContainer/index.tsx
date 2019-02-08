/**
 * @module:  ui样式容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import * as React from 'react';
// import * as style from './style/style.scss';

export default class CardContainerComponent extends React.Component<any, any> {

  public render() {
    const {children} = this.props
    return(
      <div>
        {children}
      </div>
    )
  }

}