import React , {useState,useEffect} from 'react'
import data from '../data/Bahan.json'
import {useParams} from 'react-router-dom';
import "./Edit.css"
import data_edit from '../data/Bahan.json'
import { Button } from '../components/Button';
import Auth from '../Auth';

const getlast = yeah => yeah.substring(yeah.lastIndexOf('/') + 1);

const Edit = () => {
    const [bahanNamae,setBahanNamae] = useState('Ya');
    const [bahanStocc,setBahanStocc] = useState(0);
    useEffect(() =>{
        getNamae();
    },[]);
    
    const getNamae = async () => {
        var bahan_id = getlast(window.location.pathname);
        bahan_id = parseInt(bahan_id);
          try{
            await fetch("http://localhost:5000/bahanut/"+bahan_id, {
              method: "GET",
              headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
            }).then(response => response.json().then(data => {
              if(data.length != 0){
                console.log(data)
                setBahanNamae(data.bahan_name);
                setBahanStocc(data.bahan_qty);
              }
            }));
          }
          catch(err){
            console.error(err.message);
          }
        };

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

    const handleSubmitedit = async event => {
        event.preventDefault();
        // console.log(window.location.pathname);
        alert('Submit');
        console.log("Submit");
        console.log(quantity);
        var bahan_id = getlast(window.location.pathname);
        bahan_id = parseInt(bahan_id);
        console.log(bahan_id);
        
        var bahan_qty = quantity;
        var body = {bahan_qty}
        try{
            await fetch("http://localhost:5000/bahan/"+bahan_id, {
              method: "PUT",
              headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken},
              body: JSON.stringify(body)
            });
        }
        catch(err){
            console.error(err.message);
        }
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
                        <p className="text__edit">{bahanNamae}</p>
                        <p className="text__edit">Amount of stock : {bahanStocc}</p>
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

export default Edit;
