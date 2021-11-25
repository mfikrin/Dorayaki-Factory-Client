import React, {useState, useEffect} from 'react'
import './Cards.css'
import CardItem from './CardItem'
import data from '../data/card.json'
import Pagination from './Pagination'
import Auth from "../Auth"

function Cards() {

    const [recipes, setRecipes] = useState([])

    useEffect(() =>{
        fetchRecipes();
    },[])

    const fetchRecipes = async () => {
         
        
        try {
            await fetch("http://localhost:5000/resep",{
                method: "GET",
                headers: { "Content-Type": "application/json",
                           "authorization" :  Auth.getUser().accToken}
            }).then(response => response.json()
                .then(data => {
                    setRecipes(data);
                })
            )
            }  
        catch (err){
            console.log(err);
        }
    }

    console.log(recipes)
    const json_data = data['cards']
    // const json_data = recipes
    
    
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
        count: json_data.length,
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
                            src = {"https://i.ibb.co/5GJ2KpC/dorayaki.png"}
                            alt = {i.alt}
                            title = {i.title}
                            text1 = {i.text1}
                            text2 = {i.text2}
        
                            textbutton = {i.textbutton}
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
