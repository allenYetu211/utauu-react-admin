/**
 * @file:    新建文章内容 、 编辑文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader';
import CardContainerComponent from 'src/components/cardContainer';
import MarkDownComponent from 'src/components/markdown';
import TagsComponent from 'src/components/tags'
import {getTagsAll, putEditArticle, postCreateArticle, getArticleDetail} from 'src/action/httpaction';

import {ITags, IArticle} from 'src/interfaces/interface';
import * as style from './style/style.scss';
import {withRouter} from 'react-router-dom';

interface IState {
  title : string;
  introduce : string;
  tags : ITags[];
  selected : number[];
  markedContent : string;
  isEdit : boolean;
  articleId : number;
}

class ArticleCreateOrDetailPage extends React.Component < any,
IState > {

  constructor(props : any) {
    super(props)
    this.state = {
      title: '',
      introduce: '',
      markedContent: '',
      tags: [],
      selected: [],
      isEdit: false,
      articleId: 0
    }
  }

  public async componentDidMount() {
    const result = await getTagsAll();
    this.setState({tags: result})

    const params = this.props.match.params;
    if (!!params.id) {
      const articleResult = await getArticleDetail(params.id);
      this.initHandleEditeArticle(articleResult, params.id)
    }

  }

  // 处理编辑文章初始信息
  public initHandleEditeArticle = (data : IArticle, id : number) => {
    const {title, content, introduce, tags} = data;
    const selected : number[] = []
    this
      .state
      .tags
      .forEach((item : ITags, index : number) => {
        if (tags.includes(item.msg)) {
          selected.push(index)
        }
      })

    this.setState({
      title,
      introduce,
      markedContent: content,
      selected,
      articleId: id,
      isEdit: true
    })
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
  public onChangeSelected = (selecteds : number[]) => {
    this.setState({selected: selecteds})
  }
  // 处理marked 内容
  public onChangeMarkedContent = (content : string) => {
    this.setState({markedContent: content})
  }

  // 处理内容内容
  public onSaveSubmit = async() => {

    const {
      title,
      introduce,
      markedContent,
      tags,
      selected,
      isEdit,
      articleId
    } = this.state
    const resultTags = selected.map((item : number) => tags[item].msg)
    const submitData = {
      title,
      tags: resultTags,
      introduce,
      content: markedContent,
      isEdit: true
    }

    try {
      if (isEdit) {
        await putEditArticle(submitData, articleId);
      } else {
        await postCreateArticle(submitData);
      }
      this
        .props
        .history
        .push('/article-all')
    } catch (e) {
      console.log('创建文章存储失败::', e)
    }

  }

  public render() {
    const {
      title,
      introduce,
      tags,
      selected,
      markedContent,
      isEdit
    } = this.state;
    return (
      <div>

        <ContentHeaderComponent title={isEdit
      ? '编辑文章'
      : '新建文章'}>
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
                  <MarkDownComponent
                    content={markedContent}
                    onChangeMarkedContent={this.onChangeMarkedContent}/>
                </div>
              </div>
            </div>
          </div>
        </CardContainerComponent>

      </div>
    )
  }
}

export default withRouter(ArticleCreateOrDetailPage)