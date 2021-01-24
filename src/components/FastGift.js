import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItemFastGift,addQuantity,subtractQuantity,addToCart} from './actions/cartactions'
import Recipe from './Recipe'
class FastGift extends Component{

    //to remove the item completely
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    handleRemove = (id)=>{
        this.props.removeItemFastGift(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        const mystyle = {
            width: "640px",
            height: "360px"
          }; 

    
          const mystyle2 = {
            left: "0px",
            width: "100%",
            height: "0px",
            position: "relative",
            padding: "56.25%",
            overflow: "hidden"
          };
          const mystyle3 = {
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100%",
            width: "1px", 
            width: "100%",
           
          };
        let addedItems = null
        let tempItems=null; 
        tempItems = this.props.items.length<10 ?
         (
            <Link to="/products" className="waves-effect waves-light btn" ><i class="material-icons" aria-hidden="true">Add Gifts</i></Link>
         ):
         (
             <span></span>
         )
         addedItems = this.props.items.length ?
            (   
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                    <div style={mystyle}>
  <div style={mystyle2}>
    <iframe src="http://192.168.64.2"
                 allowfullscreen
                 frameborder="0"
                 style={mystyle3}
                 scrolling="no">
    </iframe>
    </div>
    </div>
                                        {/* <img src={item.img} alt={item.img} className=""/> */}
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                        <Link to="/cart" className="waves-effect waves-light btn" ><i onClick={()=>{this.handleClick(item.id)}} class="material-icons" aria-hidden="true">Send Now</i></Link>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             ( <div>
                <p>Nothing.</p>
               
                </div>
             )
       
       return(
            <div className="container">
                <div className="cart">
                    <h5>FastGift:</h5>
                    <ul className="collection">
                        {tempItems}
                        {addedItems}
                    </ul>
                </div> 
                       
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.fast.addedItems,
        flag:state.fast.flag
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        removeItemFastGift: (id)=>{dispatch(removeItemFastGift(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FastGift)