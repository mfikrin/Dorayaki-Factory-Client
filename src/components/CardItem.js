import React from 'react'
import {Link, link} from 'react-router-dom'
import { Button } from './Button'

function CardItem(props) {
    return (
        <>
            <li>
                <Link to={props.path}>
                    <div class = "image-base">
                            <a href="">
                                <img src={props.src} />
                            </a>
                    </div>
                    
                    <a href="" class="dorayaki-name">
                        <div class="body-title"> {props.title}</div>
                    </a>
    
                    <p class ="body-text" style="font-weight: bold;color:#C4161C"> {props.text1}</p>
                    <p class ="body-text">{props.text2}</p>
                    <Button> Detail</Button>

                </Link>

            </li>
                    

        </>
    )
}

export default CardItem
