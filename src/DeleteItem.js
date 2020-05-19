import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DeleteItem extends Component {
  render() {
    return (
      <button onClick={this.props.deleteLastItem} disabled={this.props.noItemsFound()}>
          Delete Last Item
      </button>
    )
  }
}
DeleteItem.propTypes = {
  deleteLastItem : PropTypes.func.isRequired,
  noItemsFound : PropTypes.func.isRequired
}
export default DeleteItem;