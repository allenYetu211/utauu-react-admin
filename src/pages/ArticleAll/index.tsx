/**
 * @file: 全部文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import HTTP_CLIENT from 'src/http/index'
export default class ArticleAllPages extends React.Component<any, any> {
  public async componentDidMount() {
    const result = await HTTP_CLIENT.get({
      url: 'article'
    })

    console.log('result', result)
  }

  public render () {
    return (
      <div>
        All Article pages
      </div>
    )
  }
}