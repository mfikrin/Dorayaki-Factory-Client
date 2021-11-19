import React, {useState} from 'react'
import './Recipe.css'

// class Recipe extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Please write an essay about your favorite DOM element.'
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('An essay was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }


function Recipe() {

    const [RecipeName, setRecipeName] = useState({RecipeName : "nama"})

    const [InputListRecipe, setInputListRecipe] = useState(
        
        [
            {recipe: ""}
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
        list.push({recipe:""});
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
                    <input name = "RecipeName" className="textinput" type="text" placeholder="Nama resep ... " onChange={handleChangeName}/>
                    {InputListRecipe.map((item,index) =>{
                        return(
                            <div key ={index} className="bahan">
                                <label>Bahan {index + 1}</label>
                                <input name = "recipe" className="textinput" type="text" placeholder="Bahan makanan ... " value={item.recipe} onChange = {e => handleChange(e,index)}/>
                                {
                                    InputListRecipe.length - 1 === index && <input type="button" value="Add" className="button__recipe" onClick={handleAddInput}/>}
                                {
                                    InputListRecipe.length !== 1 && <input type="button" value="Remove" className="button__recipe" onClick={() => handleRemoveInput(index)}/>
                                }
                            </div>
                        )
                        }
                    )  
                    }
                    <br/>
                    <label>Image</label>
                    {/* <input className="imginput" type="file" name="addimage" required/> */}
                    
                    <button className="butmit" name="AddVar" type="submit">Submit</button>
                    
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
