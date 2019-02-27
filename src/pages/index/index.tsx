import * as React from 'react';
import {getTagsAll} from 'src/action/httpaction';
import {observer, inject} from 'mobx-react';
@inject('store')
@observer
export default class IndexPage extends React.Component<any, any> {

  public async componentDidMount() {
    await getTagsAll()
  }

  public render() {
    const {tags} = this.props.store
    console.log('tags:::', tags)
    return (
      <div>
        IndexPage
      </div>
    )
  }
}