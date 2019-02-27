/**
 * @file: 所有文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader/index';
import CardContainerComponent from 'src/components/cardContainer/index';
import ArticleContainer from 'src/components/articles';
import {getArticleAll} from 'src/action/httpaction';
import {Link} from "react-router-dom";
import {IArticle} from 'src/interfaces/interface';

interface IState {
  article : IArticle[]
}
export default class ArticleAllPages extends React.Component < any,
IState > {
  constructor(props:any) {
    super(props);
    this.state = {
      article: []
    }
  }

  public async componentDidMount() {
    const result = await getArticleAll()
    this.setState({article: result})
  }

  public render() {
    const {article} = this.state
    return (
      <div>

        <ContentHeaderComponent hideGoBack={true} title="所有文章">
          <button>
            <Link to="/article-create">新建文章</Link>
          </button>
        </ContentHeaderComponent>

        <div>
          <CardContainerComponent>
            <ArticleContainer article={article}/>
          </CardContainerComponent>
        </div>

      </div>
    )
  }
}