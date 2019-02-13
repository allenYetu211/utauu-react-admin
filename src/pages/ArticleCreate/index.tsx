/**
 * @file:    新建文章内容
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader';
import CardContainerComponent from 'src/components/cardContainer';
import MarkDownComponent from 'src/components/markdown';
import {getTagsAll} from 'src/action/httpaction';
import {ITags} from 'src/interfaces/interface';
import * as style from './style/style.scss'
interface IState {
  title : string;
  introduction : string;
  tags : ITags[]
}

export default class ArticleCreatePage extends React.Component < any,
IState > {

  constructor(props : any) {
    super(props)
    this.state = {
      title: '',
      introduction: '',
      tags: []
    }
  }

  public async componentDidMount() {
    const result = await getTagsAll()
    this.setState({tags: result})
  }

  public onTitle = (e : any) : void => {
    this.setState({title: e.target.value})
  }

  public onBriefintroduction = (e : any) => {
    this.setState({introduction: e.target.value})
  }

  public render() {
    const {title, introduction, tags} = this.state;
    return (
      <div>

        <ContentHeaderComponent title="新建文章">
          <button>
            保存
          </button>
        </ContentHeaderComponent>

        <CardContainerComponent cardTitlt="基本信息">
          <div className={style.labelItem}>
            <span>文章标题</span>
            <input value={title} onChange={this.onTitle} type="text"/>
          </div>


          <div className={style.labelItemStart}>
            <span>文章简介</span>
            <textarea value={introduction} onChange={this.onBriefintroduction}/>
          </div>

          <div className={style.labelItem}>
            <span>文章标签</span>
            <div className={style.itemContainer}>

              {tags.map((item : ITags, key : number) => {
                return (
                  <div className={style.tagItem} key={key}>
                    {item.msg}
                  </div>
                )
              })
}
            </div>
          </div>


          <div className={style.labelItem}>
            <span>文章内容</span>
            <div className={style.itemContainer}>
                <MarkDownComponent/>
            </div>
          </div>
        </CardContainerComponent>


        

      </div>
    )
  }
}