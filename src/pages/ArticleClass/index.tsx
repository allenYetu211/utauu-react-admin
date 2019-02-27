/**
 * @file: 分类目录
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader/index';
import CardContainerComponent from 'src/components/cardContainer/index';
import ArticleContainer from 'src/components/articles';
import {ITags, IArticle} from 'src/interfaces/interface';
import {getTagsAll, getTagClassArticle } from 'src/action/httpaction';

interface IState {
  tags : ITags[];
  article : IArticle[];
}
export default class ArticleClassPages extends React.Component<any, IState> {

  constructor(props : any) {
    super(props)
    this.state = {
      tags: [],
      article: []
    }
  }
  public async componentDidMount() {
    const tagResult = await getTagsAll();
    const articleResult = await getTagClassArticle(tagResult[0].msg);
    this.getTagClassArticleInfo(tagResult[0].msg)
    this.setState({
      article: articleResult
    })
  }

  public  getTagClassArticleInfo = async(tagClass: string) => {
    const articleResult = await getTagClassArticle(tagClass);
    this.setState({
      article: articleResult
    })
  }

  public render () {
    const {article} = this.state
    return (
      <div>
          <ContentHeaderComponent hideGoBack={true} title="已发布文章"/>

        <div>
          <CardContainerComponent>
            <ArticleContainer article={article}/>
          </CardContainerComponent>
        </div>
      </div>
    )
  }
}