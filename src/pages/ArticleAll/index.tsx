/**
 * @file: 所有文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader/index';
import CardContainerComponent from 'src/components/cardContainer/index';
import ArticleContainer from 'src/components/articles';
import {Link} from "react-router-dom";

export default class ArticleAllPages extends React.Component < any,
any > {
  public render() {
    return (
      <div>

        <ContentHeaderComponent title="所有文章">
          <button>
            <Link to="/article-create">新建文章</Link>
          </button>
        </ContentHeaderComponent>

        <div>
          <CardContainerComponent>
            <ArticleContainer/>
          </CardContainerComponent>
        </div>

      </div>
    )
  }
}