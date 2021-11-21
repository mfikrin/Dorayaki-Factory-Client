import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'

function CardItem(props) {
    return (
        <>
                {/* <Link to={props.path}> */}
                    <div className = "image-base">
                            <a href={"/detail/" + props.id}>
                                <img src={props.src} />
                            </a>
                    </div>

                    <div className="body-base">
                        <a href={"/detail/" + props.id} className="dorayaki-name">
                            <div className="body-title"> {props.title}</div>
                        </a>
        
                        <p className ="body-text"> {props.text1}</p>
                    {/* </div> */}
                    {/* <div className = "button__center"> */}
                    <div className="button__center">
                    <Button linkto={"/detail/" + props.id} customstyle="flip">Detail</Button>
                    </div>
                    </div>
                    
                           


                



        </>
    )
}

export default CardItem
