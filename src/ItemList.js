import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemList extends Component {
  render() {
    return (
        <ol className="item-list">
          {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )
  }
}
ItemList.propTypes = {
  items : PropTypes.array.isRequired
}
export default ItemList;