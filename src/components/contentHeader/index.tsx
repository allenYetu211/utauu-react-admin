/**
 * @module:  标签容器
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as style from './style/style.scss'
interface IProps {
  title : string;
  hideGoBack?: boolean;
}

export default class ContentHeaderComponent extends React.Component < IProps,
any > {

  public onHistoryGoBack = () => {
    history.back()
  }

  public render() {
    const {title, children, hideGoBack} = this.props

    return (
      <div className={style.contentHeader}>
        <div>
          {!hideGoBack && (
            <div onClick={this.onHistoryGoBack}>
              返回上一页
            </div>
          )
}
          <h1>{title}</h1>
        </div>

        <div>
          {children}
        </div>
      </div>
    )
  }
}