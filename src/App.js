import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from './actions/fetchProducts';

class App extends React.Component {

 componentDidMount() {
  this.props.fetchProducts({type: 'FETCH_PRODUCTS', payload: {name: 'Water'}})
 } 


  render () {
  return (
    <div className="App">
      App
    </div>
  );
  }
}

// const mapStateToProps = (state) => {
//  return {
//    products: state.products
//  }
// }


export default connect(null, {fetchProducts})( App);
