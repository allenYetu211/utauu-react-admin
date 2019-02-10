/**
 * @module:  标签容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as Style from './style/style.scss'
interface IProps{
  title: string;
}

export default class ContentHeaderComponent extends React.Component<IProps, any> {
  public render() {
    const {title, children} = this.props
    return (
      <div className={Style.contentHeader}>
        <h1>{title}</h1>

        <div>
          {children}
        </div>
      </div>
    )
  }
}