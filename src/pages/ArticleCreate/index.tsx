/**
 * @file:    新建文章内容
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader';
import CardContainerComponent from 'src/components/cardContainer';
import MarkDownComponent from 'src/components/markdown';
import TagsComponent from 'src/components/tags'
import {getTagsAll, postArticle} from 'src/action/httpaction';
import {ITags} from 'src/interfaces/interface';
import * as style from './style/style.scss';
import { withRouter } from 'react-router-dom';
 
interface IState {
  title : string;
  introduce : string;
  tags : ITags[];
  selected: number[];
  markedContent: string;
}

 class ArticleCreatePage extends React.Component < any,
IState > {

  constructor(props : any) {
    super(props)
    this.state = {
      title: '',
      introduce: '',
      markedContent: '',
      tags: [],
      selected: []
    }
  }

  public async componentDidMount() {
    const result = await getTagsAll()
    this.setState({tags: result})
  }

  // 处理标题
  public onTitle = (e : any) : void => {
    this.setState({title: e.target.value})
  }

  // 处理简介
  public onBriefintroduce = (e : any) => {
    this.setState({introduce: e.target.value})
  }

  // 处理tags
  public onChangeSelected = (selecteds: number[]) => {
    this.setState({selected: selecteds})
  }
  // 处理marked 内容
  public onChangeMarkedContent = (content: string) => {
    this.setState({markedContent: content})
  }

  // 处理提交内容
  public onSaveSubmit = async () => {
    
    const{title, introduce, markedContent, tags, selected} = this.state
    const resultTags = selected.map((item: number) => tags[item].msg)
    const submitData = {
      title,
      tags: resultTags,
      introduce,
      content: markedContent
    }

    try {
      await postArticle(submitData);
      this.props.history.push('/article-all')
    } catch (e) {
      console.log('创建文章存储失败::', e)
    }
  
  }

  public render() {
    const {title, introduce, tags, selected} = this.state;
    return (
      <div>

        <ContentHeaderComponent title="新建文章">
          <button onClick={this.onSaveSubmit}>
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
                  value={introduce}
                  onChange={this.onBriefintroduce}/>
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
                  <MarkDownComponent onChangeMarkedContent={this.onChangeMarkedContent}/>
                </div>
              </div>
            </div>
          </div>
        </CardContainerComponent>

      </div>
    )
  }
}

export default withRouter(ArticleCreatePage)