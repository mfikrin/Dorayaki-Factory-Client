import React , {useState} from 'react'
import data from '../data/Bahan.json'
import {useParams} from 'react-router-dom';
import "./Edit.css"
import data_edit from '../data/Bahan.json'
import { Button } from '../components/Button';
function Edit() {



    function filterById(jsonObject, id) {
      return jsonObject.filter(function(jsonObject) {
          return (jsonObject['id'] == id);
      })[0];
    }

    const json_data_edit = data_edit['Bahan'];
    const pathname = window.location.pathname

    const splitting = pathname.split("/")
    const id = splitting[2] 

    const data_Edit = filterById(json_data_edit,id)

    // console.log(data_Edit)

    const [quantity, setqty] = useState(1)

    const handleChangeqty = (e) => {
        const { name, value } = e.target;
        // console.log(name)
        // console.log(value)
        setqty(value)  
    };

    const reduce_qty = () => {
        
        setqty(quantity-1)
    }

    const add_qty = () => {
        setqty(quantity+1)
    }

    const handleSubmitedit = event => {
        event.preventDefault();
        alert('Submit');
        console.log("Submit")
        console.log(quantity)

    }
    return (
          <>
            <div className="Edits">
                <div className="img-frame">
                    <img src={data_Edit.src} alt={data_Edit.alt} className="prod-img"/>
                </div>
                <div class="text">
                    
                    
                        <h3></h3>
                        <h3></h3>
                        <p className="text__edit">Amount of stock : { data_Edit.quantity}</p>
                        <p className="text__edit">Add Stock (Negative Value to Reduce) : </p>
                        <form onSubmit={handleSubmitedit} >
                            <div className="edit-button">
                                <button className="edit-stock" type="button" id="krg" onClick={reduce_qty}> - </button>
                            <input className="edit-inp" type="number" name="quantity" value={quantity} onChange={handleChangeqty}/>
                                <button className="edit-stock" type="button" id="tmb" onClick={add_qty}> + </button>
                            </div>

                        <div>
                            <div className="inFlex">
                                <button className="butmit__edit" name="buyItem" id="subBut" type="submit">Commit Changes</button>
                                {/* <Button linkto="#" type="submit">Commit Changes</Button> */}
                            </div>
                        </div>
                        </form>
                </div>
            </div>

          </>
      )
}

export default Edit
