import React from 'react';

class AddFishForm extends React.Component {

    nameRef  = React.createRef();
    priceRef = React.createRef(); 
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) =>  {

        //Stop form from submitting
        event.preventDefault();
      const fish = {
         name: this.refs.nameRef.value,
         price: parseFloat(this.refs.priceRef.value), // 10.54 to 1054
        status: this.refs.statusRef.value,
         desc: this.refs.descRef.value,
         image: this.refs.imageRef.value   
      }
      this.props.addFish(fish)
      // Refresh form 
     event.currentTarget.reset();

    };

    render (){
        return (
            <div className="AddFishForm">
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref="nameRef"  type="text" placeholder="Name" />
                <input name="price" ref="priceRef" type="text" placeholder="Price" />
                <select name="status" ref="statusRef">
                <option value="available">Fresh</option>
                <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref="descRef" placeholder="Description"></textarea>
                <input name="image" ref="imageRef"  type="text" placeholder="Image"  />
                <button type="submit">+ Add Fish</button>
            </form>
                
            </div>
        )
    }
}
export default AddFishForm;