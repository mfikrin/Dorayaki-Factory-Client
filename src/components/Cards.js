import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import data from '../data/card.json'
// import img from '../img/dorayaki.png'

function Cards() {
    
    // get_data = data.map ( (data) => {
    return (
            <>
            <div className="container">
                
                {/* <div className="box">
                    <CardItem
                        id = {data.id}
                        src = {data.src}
                        alt = {data.alt}
                        title = {data.title}
                        text1 = {data.text1}
                        text2 = {data.text2}
    
                        textbutton = {data.textbutton}
                    />
                </div> */}
    
                <div className="box">
                    <CardItem
                        id = "2"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        text2 = "ini adalah resep dorayaki"
    
                        textbutton = "detail"
                    />
                </div>
    
                <div className="box">
                    <CardItem
                        id = "3"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        text2 = "ini adalah resep dorayaki"
    
                        textbutton = "detail"
                    />
                </div>
    
                <div className="box">
                    <CardItem
                        id = "4"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        text2 = "ini adalah resep dorayaki"
    
                        textbutton = "detail"
                    />
                </div>
    
                <div className="box">
                    <CardItem
                        id = "5"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        text2 = "ini adalah resep dorayaki"
    
                        textbutton = "detail"
                    />
                </div>
    
                <div className="box">
                    <CardItem
                        id = "6"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        text2 = "ini adalah resep dorayaki"
    
                        textbutton = "detail"
                    />
                </div>
    
                <div className="box">
                    <CardItem
                        id = "7"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        text2 = "ini adalah resep dorayaki"
    
                        textbutton = "detail"
                    />
                </div>
    
                <div className="box">
                    <CardItem
                        id = "8"
                        src = "img/dorayaki.png"
                        alt = "dorayaki"
                        title = "resep dorayaki"
                        text1 = "ini adalah resep dorayaki"
                        textbutton = "detail"
                    />
                </div>
    
    
                
            </div>
            </>
            
              
    
        )
    
    
}

export default Cards
