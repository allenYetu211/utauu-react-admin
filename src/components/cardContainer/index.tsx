/**
 * @module:  ui样式容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import * as React from 'react';
import * as style from './style/style.scss';

interface IProps {
  cardTitlt?: string;
}

export default class CardContainerComponent extends React.Component < IProps,
any > {

  public render() {
    const {children, cardTitlt} = this.props
    return (
      <div className={style.cardContainer}>
        <div className={style.cardTitle}>
          {cardTitlt}
        </div>
        <div>
          {children}
        </div>
      </div>
    )
  }

}