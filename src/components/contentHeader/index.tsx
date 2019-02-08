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
    const {title} = this.props
    return (
      <h1 className={Style.contentHeader}>
        {title}
      </h1>
    )
  }
}