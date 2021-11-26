import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'

function BahanItem(props) {
    return (
        <>
                {/* <Link to={props.path}> */}
                    <div className = "image-base">
                            <a href={"/Edit/" + props.id}>
                                <img src={props.src} />
                            </a>
                    </div>

                    <div className="body-base">
                        <a href={"/Edit/" + props.id} className="dorayaki-name">
                            <div className="body-title"> {props.bahanName}</div>
                        </a>
        
                        <p className ="body-text"> Quantity : {props.quantity}</p>
                    {/* </div> */}
                    {/* <div className = "button__center"> */}
                    <div className="button__center">
                    <Button linkto={"/Edit/" + props.id} customstyle="flip">Edit</Button>
                    </div>
                    </div>
                    
                           


                



        </>
    )
}

export default BahanItem
