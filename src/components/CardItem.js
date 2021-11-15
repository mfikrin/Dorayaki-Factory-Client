import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'

function CardItem(props) {
    return (
        <>
                {/* <Link to={props.path}> */}
                    <div class = "image-base">
                            <a href="#">
                                <img src={props.src} />
                            </a>
                    </div>
                    
                    <a href="" class="dorayaki-name">
                        <div class="body-title"> {props.title}</div>
                    </a>
    
                    <p class ="body-text"> {props.text1}</p>
                    <a class ="button" href="#">Detail</a>
                    
                           


                



        </>
    )
}

export default CardItem
