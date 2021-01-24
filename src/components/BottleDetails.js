import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItemFastGift,addQuantity,subtractQuantity,addToCart} from './actions/cartactions'
import Recipe from './Recipe'
import { Tab } from 'semantic-ui-react'
const panes = [
    { menuItem: 'About', render: () => <Tab.Pane>About Pannel</Tab.Pane> },
    { menuItem: 'Pair With', render: () => <Tab.Pane>Pair with Pannel</Tab.Pane> },
    { menuItem: 'Find At', render: () => <Tab.Pane>Find at Pannel</Tab.Pane> },
  ]
class BottleDetails extends Component{
      constructor(props){
          super(props);
          console.log("Bottle Details 2");
          this.state = {
            activeIndex: 1
          }
      }
    //to remove the item completely
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

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
         let tempItems = null;      
               
               
        console.log("Detail Item 2",this.props.items)  

           
        tempItems=this.props.items.map(item=>{
       return(
            <div className="container">
          <div className="cards" key={item.id}>
            <div className="cards__container">
      <div className="cards__wrapper">
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
          {/* <img src={item.img} alt={item.title}/> */}
          <br></br>
          <span className="card-title">{item.title}</span>
          <br></br>
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i class="material-icons" aria-hidden="true">C</i></span>
          <span to="/" className="btn-floating yellow darken-1" ><i  class="material-icons" aria-hidden="true">F</i></span>
      </div>
      </div>

      <div className="card-content">
          <p>{item.desc}</p>
          <p><b>Price: {item.price}Rs.</b></p>
          <p>Presented by : Aditya Sharma</p>
          <p>On 21st Feb 2020</p>
      </div>

</div>
<Tab
          panes={panes}
          activeIndex={this.state.activeIndex}
          onTabChange={this.handleTabChange}
        />
        <div>
     <Link to="/" className="waves-effect waves-teal btn" ><i class="material-icons" aria-hidden="true">I want This</i></Link>
     <Link to="/" className="waves-effect waves-red btn" ><i class="material-icons" aria-hidden="true">Gift To a Friend</i></Link>
     <Link to="/" className="waves-effect waves-light btn" ><i class="material-icons" aria-hidden="true">Swap it for something Else</i></Link>
     </div>              
            </div>
       )
        })

        return(
            <div className="container">
            <div className="cart">
                <h5>Bottle Details</h5>
                <ul className="collection">
                    {tempItems}
                   
                </ul>
            </div> 
                   
        </div>
        )
    }
}


const mapStateToProps = (state)=>{
    console.log("Detail Item",state.product.openItems)
    return {

      items: state.product.openItems,
    
      
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BottleDetails)












