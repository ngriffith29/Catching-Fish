import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        //Take a copy of the existing state
        const fishes = {...this.state.fishes};

        // NOW ADD OUR NEW FISH TO THAT FISH VARIABLE
        fishes[`fish${Date.now()}`] = fish;

        //3. set the new fishes object to state
        this.setState({
            fishes: fishes
        })
        console.log('adding a fish')
    };


    render (){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                <Header tagline="FRESH SEAFOOD MARKET" age={22} cool={true} />
               
                </div>
               <Order />
               <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App