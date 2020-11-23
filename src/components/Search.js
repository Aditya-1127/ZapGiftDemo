import React, { Component , useState, useEffect}  from 'react'
import '../App.css';


function Search() {
   
    return (
    
       <div class="ui fluid category search" className="searchBar">
         <div class="ui icon input">
           <input class="prompt" type="text" placeholder="Search..."/>
              <i class="search icon"></i>
            </div>
         <div class="results"></div>
        </div>
        
    )
}

export default Search