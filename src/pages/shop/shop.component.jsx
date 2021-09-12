import { Component } from "react"

// css
import './shop.styles.scss'

// data & pages
import SHOP_DATA from './shop.data'
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class ShopPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">{
        collections.map(({id,...OtherCollectionsProps}) =>
          <CollectionPreview key={id} {...OtherCollectionsProps} />
        )}
      </div>
    )
  }
}

export default ShopPage