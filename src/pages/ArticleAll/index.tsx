/**
 * @file: 所有文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import {articleAll} from 'src/action/httpaction';
import {IArticle} from 'src/interfaces/interface';
import ContentHeaderComponent from 'src/components/contentHeader/index';
import CardContainerComponent from 'src/components/cardContainer/index';

// @ts-ignore
import {Link} from "react-router-dom";

interface IState {
  article : IArticle | []
}
export default class ArticleAllPages extends React.Component < any,
IState > {
  constructor(props : any) {
    super(props)
    this.state = {
      article: []
    }
  }

  public async componentDidMount() {
    const result : IArticle = await articleAll()
    this.setState({article: result})
  }

  public render() {
    const {article} = this.state
    console.log('article', article)
    return (
      <div>

        <ContentHeaderComponent title="所有文章">
          <button>
            <Link to="/article-create">新建文章</Link>
          </button>
        </ContentHeaderComponent>

        <div>
          <CardContainerComponent>
            <h1>CardContainerComponent</h1>
          </CardContainerComponent>
        </div>

        
      </div>
    )
  }
}