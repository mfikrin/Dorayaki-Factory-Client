import React from 'react'
import Cards from '../components/Cards'
import Test from '../components/Test'
import Auth from '../Auth';
import './Home.css'
import Bahan from '../components/Bahan';

function Home() {
    // if (Auth.isLogged()){ return (
    //     // <h1> hello</h1>
    //     <>
            
    //         <Cards/>
            
    //     </>
        
    // )
    // } 
    // else{
    //     return(
    //     <div>Invalid</div>
    // )
    // }
    return (
    <>
            <div className="home__title"> Resep Dorayaki </div>
            <Cards/>
            <hr className="custom__hr"/>
            <div className="home__title"> Bahan Baku </div>
            <Bahan/>
    </>
    )
}

export default Home
