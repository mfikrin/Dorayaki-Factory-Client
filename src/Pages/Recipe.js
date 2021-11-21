import React, {useState} from 'react'
import { Button } from '../components/Button';
import './Recipe.css'

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

    const handleSubmit = event => {
        event.preventDefault();
        alert('HMM');
        console.log("INPUT")
        console.log(JSON.stringify(InputListRecipe));
        console.log(RecipeName.RecipeName);

    }

    return (

        <div class="container__recipe">
            <form onSubmit={handleSubmit}>
                <div className="adderform">
                    <h2>Add Dorayaki Recipe</h2>
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
