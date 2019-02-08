import * as React from 'react'
import {IColumn} from 'src/asset/interfaces/routes.interface'
// @ts-ignore
import {BrowserRouter as Route, Link} from "react-router-dom";
import * as style from 'src/routes/style/stlye.scss'
import cn from 'classnames';

interface IProps {
  index : number;
  targetCount : number;
  column : IColumn;
  onTargetLiClount : (index : number) => void;
}
export default class ColumnItemComponent extends React.Component < IProps,
any > {
  constructor(props : IProps) {
    super(props)
    this.state = {
      toggleState: false
    }
  }

  public onTargetLiClount = () => {
    const {onTargetLiClount, index} = this.props
    onTargetLiClount(index)
  }
  public render() {
    const {column, targetCount, index} = this.props
    return (
      <li className={cn(targetCount === index  ? style.active : '')} onClick={this.onTargetLiClount}>
        <Link to={column.to}>{column.txt}</Link>
      </li>
    )
  }
}