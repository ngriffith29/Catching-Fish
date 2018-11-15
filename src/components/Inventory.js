import React from 'react';
import AddfishForm from './addFishForm'
class Inventory extends React.Component {
    render (){
        return (
            <div className="inventory">
             <h2>Inventory</h2>
            <AddfishForm addFish={this.props.addFish} />
           
            </div>
        )
    }
}

export default Inventory