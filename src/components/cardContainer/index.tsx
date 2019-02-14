/**
 * @module:  ui样式容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import * as React from 'react';
import * as style from './style/style.scss';
import * as cn from 'classnames'
interface IProps {
  cardTitlt?: string;
  fullHv?: boolean;
}

export default class CardContainerComponent extends React.Component < IProps,
any > {

  
  public render() {
    const {children, cardTitlt , fullHv} = this.props
    
    return (
      <div className={cn(style.cardContainer, {[style.cardFullContainer]: fullHv})}>
        <div className={style.cardTitle}>
          {cardTitlt}
        </div>
        <div  className={style.cardChilderContainer}>
          {children}
        </div>
      </div>
    )
  }

}