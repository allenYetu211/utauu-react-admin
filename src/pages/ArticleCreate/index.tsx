/**
 * @file:    新建文章内容
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from 'src/components/contentHeader/index';
import CardContainerComponent from 'src/components/cardContainer/index';


interface IState  {
  title: string;
}

export default class ArticleCreatePage extends React.Component < any,
IState > {
  
  constructor(props: any) {
    super(props)
    this.state = {
      title: ''
    }
  }

  public onTitle = (e: any) :void => {
    this.setState({
      title: e.target.value
    })
  }

  public render() {
    const {title} = this.state;
    return (
      <div>

        <ContentHeaderComponent title="新建文章">
          <button>
            保存
          </button>
        </ContentHeaderComponent>

        <CardContainerComponent cardTitlt="文章标题">
         <input value={title} onChange={this.onTitle} type="text"/>
        </CardContainerComponent>
        
      </div>
    )
  }
}