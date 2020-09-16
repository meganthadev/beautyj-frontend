import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchProducts } from '../actions/fetchProducts'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import Product from '../components/Product'

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/products/new' component={ProductForm} />
                    <Route path='/products/:name' render={(routerProps) => <Product {...routerProps} products={this.props.products} />} />
                    <Route exact path='/products' render={(routerProps) => <ProductList {...routerProps} products={this.props.products} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);