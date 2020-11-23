import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Popup  from './Popup';
import CardItem  from './CardItem';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [addNewArray,setAddNewArray] = React.useState([]);

    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };


    const addpopup=()=>{
        const copyPostArray = Object.assign([],addNewArray)
        copyPostArray.push(<Popup/>)
        setAddNewArray (copyPostArray);
        
    }

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
         <nav className = 'navbar'>
         <div className = 'navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                ZapGift <i className='fab fa-typo3' />
            </Link> 
            <div className = 'menu-icon' onClick={handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link  className='nav-links' >
                        Services
                       
                    </Link>

                    
                    </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                </Link>
                </li>
            <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
               <i class="fas fa-user"></i>
            </Link>
            </li>
               
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
         
            <div className = 'navbar-container'>
           
                <Link to='/cart'className='navbar-links' >
                <i class="fas fa-shopping-cart"></i>
                </Link>
                {isOpen && <Popup
      content={<>
            <div className='cards'>
            <h1> Choose from a wide range of category </h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='https://images.unsplash.com/photo-1546540749-3229ce1f48da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                text='Alcohol'
                label=''
                path='/services'
                />
                <CardItem 
                src='https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                text='Non Alcohol'
                label=''
                path='/services'
                />
              
            </ul>
            </div>
        </div>
    </div>
      </>}
      handleClose={togglePopup}
    />}
                
            </div>
         </div>
         </nav>
         <div id= "mydiv">
                    {
                        addNewArray.map((post,index)=>{
                            return(
                                <Popup/>
                            )
                        })
                    }
                
                 
                </div> 
        </>
        
    );


  
  
}

export default Navbar
