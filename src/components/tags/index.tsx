/**
 * @file: 
 * @module:  tags 列表组件
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as style from './style/style.scss';
import TagItem from './tagItem'
import {ITags} from 'src/interfaces/interface';

interface IProps {
  tags : ITags[];
  selected : number[];
  onChangeSelected: (value: number[]) => void;
}
export default class TagsComponents extends React.Component < IProps,
any > {
  // 检测是否存在
  // event:React.MouseEvent<HTMLElement>
  public onChangeSelected = (index : number) => {
    const {selected, onChangeSelected}  = this.props;
    const copySelected = selected.slice()
    const includes = copySelected.includes(index)

    if (includes) {
      const targetIndex = copySelected.findIndex((item: number) => {
        return item === index
      })
      copySelected.splice(targetIndex, 1)
    } else {
      copySelected.push(index)
    }
    onChangeSelected(copySelected)
  }

  public render() {
    const {tags, selected} = this.props;
    return (
      <div className={style.itemContainer}>
        {tags.map((item : ITags, key : number) => {
          const isSelected = selected.includes(key)
          return (<TagItem
            key={key}
            index={key}
            tag={item}
            isSelected={isSelected}
            onChangeSelected={this.onChangeSelected}/>)
        })
}
      </div>
    )
  }
}
