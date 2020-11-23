import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards (){
    return (
        <div className='cards'>
            <h1> Choose from a wide range of category </h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='/image/jameson.png'
                text='Buy it Now!'
                label='Alcohol'
                path='/services'
                />
                <CardItem 
                src='/image/jack daniels.jpg'
                text='Buy it Now!'
                label='Alcohol'
                path='/services'
                />
                <CardItem 
                src='/image/corona .jpg'
                text='Buy it Now!'
                label='Alcohol'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
            <CardItem 
                src='/image/jameson.png'
                text='Buy it Now!'
                label='Alcohol'
                path='/services'
                />
                <CardItem 
                src='/image/jameson.png'
                text='Buy it Now!'
                label='Alcohol'
                path='/services'
                />
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards