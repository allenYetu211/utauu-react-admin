/**
 * @module:  登录模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as style from './style/style.scss'
export default class LoginPage extends React.Component < any,
any > {
  public render() {

    return (
      <div className={style.loginContainer}>
        <div className={style.dialogContainer}>

          <label className={style.dialogLine}>
            <span>账号：</span>
            <input type="text"/>
          </label>

          <label className={style.dialogLine}>
            <span>密码：</span>
            <input type="passwod"/>
          </label>

          <button className={style.loginButton}>登录</button>

        </div>

      </div>
    )

  }
}