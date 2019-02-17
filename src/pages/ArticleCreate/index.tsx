/**
 * @file:    新建文章内容
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader';
import CardContainerComponent from 'src/components/cardContainer';
import MarkDownComponent from 'src/components/markdown';
import TagsComponent from 'src/components/tags'
import {getTagsAll} from 'src/action/httpaction';
import {ITags} from 'src/interfaces/interface';
import * as style from './style/style.scss';
interface IState {
  title : string;
  introduction : string;
  tags : ITags[];
  selected: number[];
}

export default class ArticleCreatePage extends React.Component < any,
IState > {

  constructor(props : any) {
    super(props)
    this.state = {
      title: '',
      introduction: '',
      tags: [],
      selected: []
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

  public onChangeSelected = (selecteds: number[]) => {
    this.setState({selected: selecteds})
  }

  public render() {
    const {title, introduction, tags, selected} = this.state;
    return (
      <div>

        <ContentHeaderComponent title="新建文章">
          <button>
            保存
          </button>
        </ContentHeaderComponent>

        <CardContainerComponent fullHv={true} cardTitlt="基本信息">
          <div className={style.basicsInfoContainer}>
            <div>
              <div className={style.labelItem}>
                <span>文章标题</span>
                <input
                  className="default__style"
                  value={title}
                  onChange={this.onTitle}
                  type="text"/>
              </div>

              <div className={style.labelItemStart}>
                <span>文章简介</span>
                <textarea
                  className="default__style textarea__style"
                  value={introduction}
                  onChange={this.onBriefintroduction}/>
              </div>

              <div className={style.labelItem}>
                <span>文章标签</span>
                  <TagsComponent 
                  onChangeSelected={this.onChangeSelected}
                  selected={selected}
                  tags={tags}/>
              </div>
            </div>
            <div>
              <div className={style.labelItemStart}>
                <span>文章内容</span>
                <div className={style.itemContainer}>
                  <MarkDownComponent/>
                </div>
              </div>
            </div>
          </div>
        </CardContainerComponent>

      </div>
    )
  }
}