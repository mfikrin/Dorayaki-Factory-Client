import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="container">
            <div className="book-box">
                <CardItem 
                    path="#"
                    src="../../public/img/dorayaki.png"
                    title="HII"
                    text1="Halo"
                    text2 ="Halo"
                />
            </div>
        </div>
    )
}

export default Cards
