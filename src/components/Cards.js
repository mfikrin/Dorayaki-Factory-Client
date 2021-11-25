import React, {useState, useEffect} from 'react'
import './Cards.css'
import CardItem from './CardItem'
import data from '../data/card.json'
import Pagination from './Pagination'
import Auth from "../Auth"

function Cards() {

    const [recipes, setRecipes] = useState([])
    let dorayaki_name = [];
    let bahan_name = [];
    let quantity = [];

    useEffect(() =>{
        fetchRecipes();
        
    },[])

    const fetchRecipes = async () => {
        try {
            await fetch("http://localhost:5000/resep",{
                method: "GET",
                headers: { "Content-Type": "application/json",
                "Authorization" :"Bearer "+Auth.getUser().accToken}
            }).then(response => response.json()
                .then(data => {
                    if (data.length != 0){
                        setRecipes(data.values);
                        console.log("DATAA");
                        console.log(data.values);
                    }
                })
            
            )
        }  
        catch (err){
            console.log(err);
        }
    }

    console.log("HALLOO")
    console.log(recipes);
    
    // Mendapatkan quantity
    const getQuantity = () =>{
        for (let i in recipes){
            console.log(i);
            console.log(recipes[i].resep_qty);
            quantity.push(recipes[i].resep_qty);
        }
    }
        


    const json_data = data['cards']
    // console.log(json_data)
    // const json_data = recipes
    

    // get nama dorayaki
    const getNameDora = async () => {
        for (let i in recipes){
            console.log(recipes[i].dora_id);
            let tempName = '';
            try{
                await fetch("http://localhost:5000/doraName/" + recipes[i].dora_id, {
                    method: "GET",
                    headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
                }).then(response => response.json().then(data => {
                if(data.length != 0){
                    // console.log("GET NAME DORA");
                    // console.log(data.dora_name);
                    // console.log(data.dora_name);
                    tempName = data.dora_name;
                    dorayaki_name.push(tempName);

                }
                }));
            }
            catch(err){
                console.error(err.message);
            }
        }
    }
    
    const getNameBahan = async () => {
        console.log("Get name Bahan");
        for (let i in recipes){
            console.log(recipes[i].bahan_id);
            let bahan_name_temp = [];
            for (let j in recipes[i].bahan_id){
                // console.log("ITERASI",j);
                // console.log("~~~~~~~~~~~~~~~~~~~~BAHAN")
                // console.log(recipes[i].bahan_id[j]);
                try{
                    await fetch("http://localhost:5000/bahanName/" + recipes[i].bahan_id[j], {
                        method: "GET",
                        headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
                    }).then(response => response.json().then(data => {
                    if(data.length != 0){
                        // console.log(data);
                        // console.log(data.bahan_name);
                        bahan_name_temp.push(data.bahan_name);
                    }
                    }));
                }
                catch(err){
                    console.error(err.message);
                }
            }
            bahan_name.push(bahan_name_temp);
        }
    }
    
    getNameDora();
    getNameBahan();
    getQuantity();
    console.log("dorayaki_name",dorayaki_name);
    console.log(bahan_name);
    console.log("qrt", quantity);

    for (let i in dorayaki_name){
        console.log("LOOP");
        console.log(i);
    }

    // var json_string = JSON.stringify(json_arr);
    
    // console.log("JSONNNN STRING");
    // console.log(json_string);


    var json_data__ = [];
    for (let i in recipes){
        let id = i+1;
        let dorayaki_name_temp = dorayaki_name[i];
        let bahan_name_temp = bahan_name[i];
        let quantity_temp = quantity[i];
        json_data__.push(
            {"id" : id, 
            "dorayaki_name" : dorayaki_name_temp,
            "bahan_name" : bahan_name_temp,
            "quantity": quantity_temp
            }
        );
    }
    
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");

    console.log(json_data__);

    // {
    //     id :
    //     nama1 :
    //     bahan : 
    //     [
    //         bahan1 : 
    //         bahan2 :
    //     ]
    //     quantity :
    //     [
    //         qty1 :
    //         qty2 :
    //     ]

    // },
    // {
    //     id :
    //     nama1 :
    //     bahan : 
    //     [
    //         bahan1 : 
    //         bahan2 :
    //     ]
    //     quantity :
    //     [
    //         qty1 :
    //         qty2 :
    //     ]

    // }
    // console.log(dorayaki_name);
    // console.log("BAHAN NAME");
    // console.log(bahan_name)
    console.log(quantity);

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
                            nama = {i.nama}
                            src = {"https://i.ibb.co/5GJ2KpC/dorayaki.png"}
                            
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
