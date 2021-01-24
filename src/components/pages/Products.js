import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartactions'
import { addToFastGift } from '../actions/cartactions'
import { open_details } from '../actions/cartactions'
import { fetchProducts } from "../actions/productActions";
import { Dropdown, Image } from 'semantic-ui-react'
import Example from "../DropDown";   
import RSlider from "../RangeSlider";   
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ProgressBar from "../ProgressBar";   
import Facebook from "../FetchFacebook";   
import FileUpload from "../FileUpload";  
import ZapWallet from "../Zapwallet";  
import DropzoneFile from "../DropzoneFile";   
import GMaps from "../Maps";   
import  './Products.css'
import  '../Cards.css'
import unplashimage from '../../images/unplash.png';
import GoogleMap from '../GoogleMap';
import Auto from '../Autocomplete';
import { Link } from 'react-router-dom'
// import ultramax from '../../images/ultramaxFile/ultramaxcan2_XR.48.html'
import fratelliobj from '../../images/02.obj'
import fratellimtl from '../../images/02.mtl'
import {JSONModel} from 'react-3d-viewer';
import {OBJModel} from 'react-3d-viewer';
import {Tick,MTLModel} from 'react-3d-viewer';
import threeD from "../Threed";  
import {GLTFModel,AmbientLight,DirectionLight} from 'react-3d-viewer';



// const htmlDoc = {__html: ultramax};

// const classes = useStyles();
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
    handleOpenClick = (id)=>{
      this.props.open_details(id); 
      console.log("Bottle Details Page 1")
  }
    handleClickFastGift = (id)=>{
      if(this.props.flag!=1){
      this.props.addToFastGift(id); 
      } else {
        alert("No More bottles can be added")
      }
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
      const mystyle = {
        width: "540px",
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


             let links="http://192.168.64.2/{{item.link}}"
            let itemList=null;
       
                if(this.state.value2==1){
                 itemList = this.props.items.sort((a, b) => a.price - b.price).map(item=>{
                  if(item.price>=this.state.value[0]&&item.price<=this.state.value[1]){
                     
                    return(
                        <div className="cards" key={item.id}>
                          <div className="cards__container">
                                <div className="cards__wrapper">
                                  
                                    <img src={item.img} alt={item.title}/>
                                    
                                    <br></br>
                                    <span className="card-title">{item.title}</span>
                                    <br></br>
                                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="material-icons" aria-hidden="true">C</i></span>
                                    <Link to="/bottle" className="waves-effect waves-light btn" ><i onClick={()=>{this.handleOpenClick(item.id)}} class="material-icons" aria-hidden="true">Open Page</i></Link>
                                    <span to="/" className="btn-floating yellow darken-1" ><i onClick={()=>{this.handleClickFastGift(item.id)}} class="material-icons" aria-hidden="true">F</i></span>
                                </div>
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
                          <div className="cards" key={item.id}>
                              <div className="cards__container">
                                  <div className="cards__wrapper">
                                 
                                    <img src={item.img} alt={item.title}/>
                                   
                                      <br></br>
                                      <span className="card-title">{item.title}</span>
                                      <br></br>
                                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="material-icons" aria-hidden="true">C</i></span>
                                      <Link to="/bottle" className="waves-effect waves-light btn" ><i onClick={()=>{this.handleOpenClick(item.id)}} class="material-icons" aria-hidden="true">Open Page</i></Link>
                                      <span to="/" className="btn-floating yellow darken-1" ><i onClick={()=>{this.handleClickFastGift(item.id)}} class="material-icons" aria-hidden="true">F</i></span>
                                  </div>
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
                          <div className="cards" key={item.id}>
                              <div className="cards__container">
                                  <div className="cards__wrapper">
                                  
                                  <div style={mystyle}>
  <div style={mystyle2}>
    <iframe src="https://zapgift.web.app"
                 allowfullscreen
                 frameborder="0"
                 style={mystyle3}
                 scrolling="no">
    </iframe>
    </div>
    </div>
                                  
                                      <br></br>
                                      <span className="card-title">{item.title}</span>
                                      <br></br>
                                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="material-icons" aria-hidden="true">C</i></span>
                                      <Link to="/bottle" className="waves-effect waves-light btn" ><i  onClick={()=>{this.handleOpenClick(item.id)}} class="material-icons" aria-hidden="true">Open Page</i></Link>
                                      <span to="/" className="btn-floating yellow darken-1" ><i onClick={()=>{this.handleClickFastGift(item.id)}} class="material-icons" aria-hidden="true">F</i></span>
                                  </div>
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
            <div>
                <h3 className="">Our items</h3>
                <h4 className="">Filter</h4>
              
                <Dropdown
    item
    text="Select Filter"
    options={ocassions}
    onChange={this.handleDropdown}
  />
            
      {/* <ProgressBar value={75}/>
      <Maps/>
      <Facebook/>
      <DropzoneFile/> */}

      {/* <FileUpload/> */}
     {/* <ZapWallet/> */}
     {/* <Auto/> */}
     {/* <GMaps/> */}
     {/* <GoogleMap/> */}
 

                <div className="box">
                    {itemList}
                 
                </div>
                <div>
      {/* <OBJModel 
        width="400" height="400"  
        position={{x:0,y:-100,z:0}} 
        src="../../images/fratelli.obj"
        onLoad={()=>{
          //...
        }}
        onProgress={xhr=>{
          //...
        }}
      /> */}

    <div className="box">
     {/* <MTLModel 
      width = {900}
      height = {900}
      enableZoom = {true}
      position={{x:0,y:-100,z:0}}
      rotation={this.state.rotation}
      mtl={fratellimtl}
      src={fratelliobj}
      texPath="./src/lib/model/"
      /> */}
    
    </div>




    <div>
      {/* <GLTFModel src={fratelligltf}>
        <AmbientLight color={0xffffff}/>
        <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
        <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
     </GLTFModel> */}
    </div>


    
    {/* <threeD/> */}
    <div >
  <div >
  {/* <div style={mystyle}>
  <div style={mystyle2}>
    <iframe src="http://192.168.64.2"
                 allowfullscreen
                 frameborder="0"
                 style={mystyle3}
                 scrolling="no">
    </iframe>
    </div>
    </div> */}
  </div>
</div>
  
    </div>
                <div >

  

 
</div>
              
               
      {/* <div className = "first">
                <div className="boxlinear">
                  <img className="image" src ={require('../../images/unplash.png')}/>     
                </div>
      </div> */}
{/* 
      <div className = "first2"> 
               <div className="design">
                <div className="boxinside">
                  <div className="boxlinear2">
                
                  </div>
                </div>
                </div>
      </div> */}
     


            </div>
        )
        
    }
  
    
}
const mapStateToProps = (state)=>{
    return {
      items: state.cart.items,
      flag:state.fast.flag
      
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addToFastGift: (id)=>{dispatch(addToFastGift(id))},
        open_details:(id)=>{dispatch(open_details(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)