/**
 * @file: 
 * @module:  文章渲染
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import * as React from 'react';
import {IArticle} from 'src/interfaces/interface';
import {getArticleAll} from 'src/action/httpaction';
import {Link} from "react-router-dom";
import * as style from './style/style.scss'


interface IState {
  article : IArticle[]
}
export default class ArticleContainer extends React.Component < any,
IState > {

  constructor(props : any) {
    super(props)
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
      <div className={style.articleContainer}>
        {article.map((item : IArticle, key : number) => {
          const skipPath = `/article-detail/${item._id}`
          return (
            <div className={style.articleItem} key={key}>

              <h1 className={style.articleTitle}>
               <Link to={skipPath}> title {item.title}</Link>
              </h1>

              <div className={style.articleIntroduce}>
                introduce {item.introduce}
              </div>

            </div>
          )
        })
}
      </div>
    )
  }
}