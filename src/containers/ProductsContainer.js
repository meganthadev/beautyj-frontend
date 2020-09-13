import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/fetchProducts'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'


class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <ProductForm /><br></br>
                <ProductList products={this.props.products} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsContainer);