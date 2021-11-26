import React, {useState} from 'react'
import { Button } from '../components/Button';
import './AddBahan.css'
import Auth from '../Auth';

function AddBahan() {

    // const [BahanName, setBahanName] = useState({BahanName : ""})

    const [InputBahan, setInputBahan] = useState(
        
        [
            {Bahan: "",
            quantity: 1}
        ]
    );

    // const handleChangeName = e => {
    //     const { name, value } = e.target;
    //     setRecipeName({
    //         [name] : value}
    //     )
    //     console.log(name);
    //     console.log(value);
    // }

    const handleChange = (e,index) => {
        const { name, value } = e.target;
        const list = [...InputBahan];
        list[index][name] = value;
        setInputBahan(list)
        console.log(name);
        console.log(value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        alert('Submit');
        console.log("Submit")
        console.log(JSON.stringify(InputBahan));
        
        for (let i in InputBahan){
            const bahan_name = InputBahan[i].Bahan;
            const bahan_qty = InputBahan[i].quantity; 
            var body = {bahan_name,bahan_qty}
            try{
                await fetch("http://localhost:5000/bahan/", {
                  method: "POST",
                  headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken},
                  body: JSON.stringify(body)
                
                }).then(response => response.json().then(data => {
                  if(data.length != 0){
                    console.log("DATTATA")
                    console.log(data);
                  }
                }));
            }
            catch(err){
                console.error(err.message);
            }
        }

        

    }

    return (

        <div class="container__recipe">
            <form onSubmit={handleSubmit}>
                <div className="adderform">
                    <h2 className="recipe__title">Add Bahan</h2>
                    {/* <label>Name</label>
                    
                    <input name = "BahanName" className="nameinput" type="text" placeholder="Nama bahan ... " onChange={e => handleChange(e,1)} autoComplete="off"/> */}
                    
                    {InputBahan.map((item,index) =>{
                        return(
                            <div key ={index} className="bahan">
                                <label>Bahan</label>
                                <br/>
                                <input name = "Bahan" className="textinput" type="text" placeholder="Bahan makanan ... " value={item.recipe} onChange = {e => handleChange(e,index)} autoComplete="off"/>
                                
                                
                                
                                <input name = "quantity" className="rcpinput" type="number" placeholder="Bahan makanan ... " min="1" value={item.quantity} onChange = {e => handleChange(e,index)} autoComplete="off"/>
                                {/* {
                                    InputBahan.length - 1 === index && <input type="button" value="+" className="btn__add mrglft" onClick={handleAddInput}/>
                                }
                                {
                                    InputBahan.length !== 1 && <input type="button" value="-" className="btn__add danger mrglft" onClick={() => handleRemoveInput(index)}/>
                                } */}
                                
                                
                            </div>
                        )
                        }
                    )  
                    }
                 
                    <br/>
                    {/* <label>Image</label> */}
                    {/* <input className="imginput" type="file" name="addimage" required/> */}
                    
                    <button className="btn__add wider" name="AddVar" type="submit">Submit</button>
                    
                </div>

            {/* <pre>
                {JSON.stringify(InputBahan,null,2)}
                <br/>
                
            </pre> */}
        </form>
    
    </div>


    )
}

export default AddBahan
