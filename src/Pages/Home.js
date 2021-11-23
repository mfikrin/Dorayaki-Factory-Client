import React from 'react'
import Cards from '../components/Cards'
import Test from '../components/Test'
import Auth from '../Auth';

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
        
            <Cards/>
            {/* <Test/> */}
            
    </>
    )
}

export default Home
