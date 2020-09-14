import React from 'react';
import DetailForm from '../components/DetailForm'
import Details from '../components/Details'



class DetailContainer extends React.Component {

    render() {
        return (
            <div>
               <DetailForm product={this.props.product} /><br></br>
               <Details detail={this.props.product && this.props.product.detail} />
            </div>
        )

 }
}
export default DetailContainer