import React, {useState, useEffect} from 'react'
import './Cards.css'
import CardItem from './CardItem'
import data from '../data/card.json'
import Pagination from './Pagination'
import Auth from "../Auth"

function Cards() {

    const [recipes, setRecipes] = useState([]);
    const [doraName, setDoraName] = useState([]);
    const [bahanName, setBahanName] = useState();
    const [quantity, setQuantity] = useState([]);

    // let dorayaki_name = [];

    useEffect(() =>{
        fetchRecipes();
        getNameDora1();
        getNameBahan1();
        getQuantity();
    },[])

    const fetchRecipes = async () => {
        try {
            await fetch("http://localhost:5000/resepAll",{
                method: "GET",
                headers: { "Content-Type": "application/json",
                "Authorization" :"Bearer "+Auth.getUser().accToken}
            }).then(response => response.json()
                .then(data => {
                    if (data.length != 0){
                        setRecipes(data.values);
                        console.log("DATAA");
                        console.log("WITHOUT VALUES",data);
                    }
                })
            )
        }  
        catch (err){
            console.log(err);

        }
    }
    
    // Mendapatkan quantity
    let quantity_temp = [];
    const getQuantity = () =>{
        for (let i in recipes){
            console.log("For I", i);
            console.log(recipes[i].resep_qty);
            quantity_temp.push(recipes[i].resep_qty);
        }
        setQuantity(quantity_temp);
    }

    var name_temp = [];
    const getNameDora1 = () =>{
        for (let i in recipes){
            console.log("For I", i);
            console.log(recipes[i].dora_name);
            name_temp.push(recipes[i].dora_name);
        }
        setDoraName(name_temp);
    }

    var bahan_temp = [];
    const getNameBahan1 = () =>{
        for (let i in recipes){
            console.log("For I", i);
            console.log(recipes[i].bahan_name);
            bahan_temp.push(recipes[i].bahan_name);
        }
        setBahanName(bahan_temp);
        
    }
        

    // // get nama dorayaki
    // const getNameDora = async () => {
    //     var dorayaki_name = [];
    //     for (let i in recipes){
    //         console.log(recipes[i].dora_id);
    //         try{
    //             await fetch("http://localhost:5000/doraName/" + recipes[i].dora_id, {
    //                 method: "GET",
    //                 headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
    //             }).then(response => response.json().then(data => {
    //             if(data.length != 0){
    //                 console.log("NAMA FUNGSI",data.dora_name);
    //                 dorayaki_name.push(data.dora_name);
    //             }
    //             }));
    //         }
    //         catch(err){
    //             console.error(err.message);
    //         }
    //     }
    //     setDoraName(dorayaki_name);
    // }

    
    // const getNameBahan = async () => {
    //     console.log("Get name Bahan");
    //     var bahan_name_local = [];
    //     for (let i in recipes){
    //         // console.log(recipes[i].bahan_id);
    //         var bahan_name_temp = [];
    //         for (let j in recipes[i].bahan_id){
    //             try{
    //                 await fetch("http://localhost:5000/bahanName/" + recipes[i].bahan_id[j], {
    //                     method: "GET",
    //                     headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
    //                 }).then(response => response.json().then(data => {
    //                 if(data.length != 0){
    //                     // console.log(data);
    //                     // console.log(data.bahan_name);
    //                     bahan_name_temp.push(data.bahan_name);
    //                 }
    //                 }));
    //             }
    //             catch(err){
    //                 console.error(err.message);
    //             }
    //         }
    //         bahan_name_local.push(bahan_name_temp);   
    //     }
    //     console.log("BAHAN FUNGSI", bahan_name_local);
    //     setBahanName(bahan_name_local);
    // }

    
    console.log("RECIPES",recipes);
    console.log("FIX DORA", doraName.length);
    console.log("BAHAN NAME",bahanName);
    console.log("QUANITITY", quantity);

    var json_data = [];
    for (let i = 0 ; i < doraName.length ; i++){
        let id = i+1;
        let dorayaki_name_temp = doraName[i];
        let bahan_name_temp = bahanName[i];
        let quantity_temp = quantity[i];
        json_data.push(
            {"id" : id, 
            "dorayaki_name" : dorayaki_name_temp,
            "src" :"https://i.ibb.co/5GJ2KpC/dorayaki.png",
            "bahan_name" : bahan_name_temp,
            "quantity": quantity_temp
            }
        );
    }

    
    // const json_data = data['cards']
    // console.log(json_data)

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
        canNext,
        canPrev
      } = Pagination({
        contentPerPage: 8,
        count: json_data.length
      });
    return (
            <>
            {/* {console.log(data)} */}

            <div className="container">
                {json_data.slice(firstContentIndex,lastContentIndex).map(i => {
                    return(
                        <div className="box" key={i.id}>
                            <CardItem
                            id = {i.id}
                            nama = {i.dorayaki_name}
                            src = {i.src}
                            
                            />
                        </div>
                    )
                    })
                }

                
                
            </div>

            <div className="pagination">
                    <button className="btn__pagination" onClick={() => setPage(1)} disabled={!canPrev} >
                {'First'}
                </button>{' '}

                <button className="btn__pagination" onClick={prevPage} disabled={!canPrev}>
                {'<'}
                </button>{' '}
                
                
                <button className="btn__pagination" onClick={nextPage} disabled={!canNext}>
                {'>'}
                </button>{' '}
        
        
                <button className="btn__pagination" onClick={() => setPage(totalPages)} disabled={!canNext} >
                {'Last'}
                </button>{' '}
                
                
                
                <span className="page__of">
                Page{' '}
                <strong>
                    {page} of {totalPages}
                </strong>{' '}
                </span>

                
        </div>
            </>
        )
        
    }
    
export default Cards
