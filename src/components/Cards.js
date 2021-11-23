import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import data from '../data/card.json'
// import img from '../img/dorayaki.png'

function Cards() {

    const json_data = data['cards']

    return (
            <>
            {/* {console.log(data)} */}

            <div className="container">
                {json_data.map(i => {
                    return(
                        <div className="box" key={i.id}>
                            <CardItem
                            id = {i.id}
                            src = {i.src}
                            alt = {i.alt}
                            title = {i.title}
                            text1 = {i.text1}
                            text2 = {i.text2}
        
                            textbutton = {i.textbutton}
                            />
                        </div>
                    )
                    })
                }
                
            </div>
            </>
        )
        
    }
    
export default Cards
