import React from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../actions/addProduct'
class ProductForm extends React.Component {


    state = {
        name: '',
        image_url: '',
        rating: ''
    }

    handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
            this.setState({
                name: '',
                image_url: '',
                rating: ''
            })
        this.props.addProduct(this.state)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name:  </label>
                    <input type='text' placeholder='Product Name' value={this.state.name} name="name" onChange={this.handleChange} /><br></br>
                    <label>Product Image:  </label>
                    <input type='text' placeholder='Image URL' value={this.state.image_url} name="image_url" onChange={this.handleChange} /><br></br>
                    <label>Your Personal Rating 1-5:  </label>
                    <input type='text' placeholder='Rating' value={this.state.rating} name="rating" onChange={this.handleChange} /><br></br>
                <input type="submit" /><br></br><br></br>
                </form>
            </div>
        )
    }
}

export default connect(null, {addProduct})(ProductForm)

