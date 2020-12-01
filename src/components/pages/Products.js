import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartactions'
import { fetchProducts } from "../actions/productActions";
import { Dropdown } from 'semantic-ui-react'
import Example from "../DropDown";   
import RSlider from "../RangeSlider";   
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ProgressBar from "../ProgressBar";   
import Facebook from "../FetchFacebook";   
import UploadFile from "../UploadFile";   
import FileUpload from "../FileUpload";  

const ocassions = [
    {
      key: 'Low to High',
      text: 'Low to High',
      value: 1,
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'High to Low',
      text: 'High to Low',
      value: 2,
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
    }
  ]
class Products extends Component{

    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
     handleChange = (event, newValue) => {
       this.setState({value:newValue})
      }
      handleDropdown = (event, data) => {
        this.setState({value2:data.value})
       }
     constructor(props){
         super(props);
         this.state = {
             value:[0,6000],
             value2:3
         }
     }
  
    render(){
            let itemList=null;
       
                if(this.state.value2==1){
                 itemList = this.props.items.sort((a, b) => a.price - b.price).map(item=>{
                  if(item.price>=this.state.value[0]&&item.price<=this.state.value[1]){
                     
                    return(
                        <div className="card" key={item.id}>
                           
                                <div className="card-image">
                                    <img src={item.img} alt={item.title}/>
                                    <span className="card-title">{item.title}</span>
                                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="fa fa-plus" aria-hidden="true">add</i></span>
                                </div>
        
                                <div className="card-content">
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}Rs.</b></p>
                                </div>
                         </div>
        
                    )
                  }
                })
            } else if (this.state.value2==2){
                 itemList = this.props.items.sort((a, b) => b.price - a.price).map(item=>{
                    if(item.price>=this.state.value[0]&&item.price<=this.state.value[1]){
                       
                      return(
                          <div className="card" key={item.id}>
                             
                                  <div className="card-image">
                                      <img src={item.img} alt={item.title}/>
                                      <span className="card-title">{item.title}</span>
                                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="fa fa-plus" aria-hidden="true">add</i></span>
                                  </div>
          
                                  <div className="card-content">
                                      <p>{item.desc}</p>
                                      <p><b>Price: {item.price}Rs.</b></p>
                                  </div>
                           </div>
          
                      )
                    }
                  })

            } else {
                 itemList = this.props.items.map(item=>{
                    if(item.price>=this.state.value[0]&&item.price<=this.state.value[1]){
                       
                      return(
                          <div className="card" key={item.id}>
                             
                                  <div className="card-image">
                                      <img src={item.img} alt={item.title}/>
                                      <span className="card-title">{item.title}</span>
                                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="fa fa-plus" aria-hidden="true">add</i></span>
                                  </div>
          
                                  <div className="card-content">
                                      <p>{item.desc}</p>
                                      <p><b>Price: {item.price}Rs.</b></p>
                                  </div>
                           </div>
          
                      )
                    }
                  })
            }

            
        
        

        return(
            <div className="container">
                <h3 className="">Our items</h3>
                <h4 className="">Filter</h4>
              
                <Dropdown
    item
    text="Select Filter"
    options={ocassions}
    onChange={this.handleDropdown}
  />
                <RSlider/>
                <Slider
                    value={this.state.value}
                
                    min={0}
                    step={200}
                    max={10000}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                 
      />
      <ProgressBar value={75}/>
      <Facebook/>
     
      <FileUpload/>

                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)