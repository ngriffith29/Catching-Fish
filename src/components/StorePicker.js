import React from "react";
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    myInput= React.createRef();


    goToStore = (event) => {
    
        //1. Stop form from submitting
        event.preventDefault()
        //2. Get teh text from that input
      const storeName =  this.refs.myInput.value;
        console.log(storeName)
        //3. Change the page to /store/whatever-they-entered.
        this.props.history.push(`/store/${storeName}`)

    }
  

    render() {
       
        return (
           <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
            type="text" 
            ref="myInput"
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()}
            />
            <button type="submit">Visit Store -></button>
           
           
           
           
           
           </form>



        );



    }



}
export default StorePicker;