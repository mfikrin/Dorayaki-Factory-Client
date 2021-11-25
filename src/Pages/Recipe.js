import React, {useState} from 'react'
import { Button } from '../components/Button';
import './Recipe.css'
import Auth from '../Auth';

function Recipe() {

    const [RecipeName, setRecipeName] = useState({RecipeName : "nama"})

    const [InputListRecipe, setInputListRecipe] = useState(
        
        [
            {recipe: "",
            quantity: 1}
        ]
    );

    const handleChangeName = e => {
        const { name, value } = e.target;
        setRecipeName({
            [name] : value}
        )
        console.log(name);
        console.log(value);
    }

    const handleChange = (e,index) => {
        const { name, value } = e.target;
        const list = [...InputListRecipe];
        list[index][name] = value;
        setInputListRecipe(list)
        console.log(name);
        console.log(value);
    };



    const handleAddInput = () => {
        // setInputListRecipe([...InputListRecipe,{recipe : ""}]);
        const list = [...InputListRecipe];
        list.push({recipe:"",quantity:1});
        setInputListRecipe(list);
    }

    const handleRemoveInput = index => {
        const list = [...InputListRecipe];
        list.splice(index,1);
        setInputListRecipe(list);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        alert('Submit');
        console.log("Submit")
        console.log(JSON.stringify(InputListRecipe));
        console.log(RecipeName.RecipeName);
        // const list_to_db = [...inputToDb];
        // const { name, value } = 
        
        let dora = '';
        let bahan = [];
        let qty = [];
        // Mendapatkan ID Dorayaki
        try{
          await fetch("http://localhost:5000/dora/" + RecipeName.RecipeName , {
            method: "GET",
            headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
          }).then(response => response.json().then(data => {
            if(data.length != 0){
              console.log(data);
              console.log(data.dora_id);
              dora = data.dora_id;
            }
          }));
        }
        catch(err){
          console.error(err.message);
        }

        // Mendapatkan ID Bahan
        console.log(InputListRecipe[0].recipe);
        for (let i in InputListRecipe){
            try{
                await fetch("http://localhost:5000/bahan/" + InputListRecipe[i].recipe , {
                  method: "GET",
                  headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
                }).then(response => response.json().then(data => {
                  if(data.length != 0){
                    console.log(data);
                    console.log(data.bahan_id);
                    // bahan = data.bahan_id;
                    bahan.push(data.bahan_id);
                    // qty = InputListRecipe[i].quantity;
                    qty.push(parseInt(InputListRecipe[i].quantity));
                  }
                }));
            }
            catch(err){
                console.error(err.message);
            }
        }

        console.log("BODYYY");
        console.log(dora);
        console.log(bahan);
        console.log(qty);
        // Masukin ke DB
        console.log("MASUKIN WOI KE DB");
        for (let i in InputListRecipe){
            const bahan_id = bahan[i];
            const dora_id = dora;
            const resep_qty = qty[i];
            var body = {bahan_id, dora_id, resep_qty};
            console.log(body);
            try{
                await fetch("http://localhost:5000/resep", {
                  method: "POST",
                  headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken},
                  body: JSON.stringify(body)
                }).then(response => response.json().then(data => {
                  if(data.length != 0){
                    console.log(data)
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
                    <h2 className="recipe__title">Add Dorayaki Recipe</h2>
                    <label>Name</label>
                    
                    <input name = "RecipeName" className="nameinput" type="text" placeholder="Nama resep ... " onChange={handleChangeName} autoComplete="off"/>
                    {InputListRecipe.map((item,index) =>{
                        return(
                            <div key ={index} className="bahan">
                                <label>Bahan {index + 1}</label>
                                <br/>
                                <input name = "recipe" className="textinput" type="text" placeholder="Bahan makanan ... " value={item.recipe} onChange = {e => handleChange(e,index)} autoComplete="off"/>
                                
                                
                                
                                <input name = "quantity" className="rcpinput" type="number" placeholder="Bahan makanan ... " min="1" value={item.quantity} onChange = {e => handleChange(e,index)} autoComplete="off"/>
                                {
                                    InputListRecipe.length - 1 === index && <input type="button" value="+" className="btn__add mrglft" onClick={handleAddInput}/>
                                }
                                {
                                    InputListRecipe.length !== 1 && <input type="button" value="-" className="btn__add danger mrglft" onClick={() => handleRemoveInput(index)}/>
                                }
                                
                                
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

            <pre>
                {JSON.stringify(InputListRecipe,null,2)}
                <br/>
                {JSON.stringify(RecipeName,null,2)}
            </pre>
        </form>
    
    </div>


    )
}

export default Recipe
