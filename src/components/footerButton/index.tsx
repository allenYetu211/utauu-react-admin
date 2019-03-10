/**
 * @module:  底部确认模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as style from './style/style.scss';

interface IProps {
  ok : () => void;
  cancel?: () => void;
}

export default class FooterButtonComponent extends React.Component < IProps,
any > {

  public render() {
    const {ok, cancel} = this.props
    return (
      <div className={style.footerComponent}>
        <div className={style.footerButtonComponent}>
          <button onClick={ok}>确认</button>
          {!!cancel && <button onClick={cancel}>取消</button>
}
        </div>
      </div>
    )
  }
}