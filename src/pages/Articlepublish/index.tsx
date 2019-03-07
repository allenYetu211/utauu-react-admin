/**
 * @file: 发布文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import {getPublishClassArticle} from 'src/action/httpaction';
import ContentHeaderComponent from 'src/components/contentHeader/index';
import CardContainerComponent from 'src/components/cardContainer/index';
import ArticleContainer from 'src/components/articles';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class ArticlePublishPages extends React.Component<any, any> {

  constructor(props : any) {
    super(props)
    this.state = {
      article: [],
    }
  }

  public async componentDidMount() {
    const article = await getPublishClassArticle(true);
    this.setState({article});
  }


  public render() {
    const {article} = this.state;
    return (
      <div>
        <ContentHeaderComponent hideGoBack={true} title="已发布文章"/>
        <div>
          <CardContainerComponent>

            <div>
              <ArticleContainer article={article}/>
            </div>
          </CardContainerComponent>
        </div>
      </div>
    )
  }
}

