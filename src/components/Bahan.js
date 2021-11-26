import React, {useState,useEffect} from 'react'
import './Bahan.css'
import CardItem from './CardItem'
import data from '../data/Bahan.json'
import Pagination from './Pagination'
import BahanItem from './BahanItem'
import Auth from "../Auth"
// import img from '../img/dorayaki.png'

function Bahan() {

    const [bahan, setBahan] = useState([])
    const [Datalength, setDatalength] = useState(0)
    
    useEffect(() =>{
        fetchBahan();
        
    },[])

    const fetchBahan = async () => {
        try {
            await fetch("http://localhost:5000/bahan",{
                method: "GET",
                headers: { "Content-Type": "application/json",
                "Authorization" :"Bearer "+Auth.getUser().accToken}
            }).then(response => response.json()
                .then(data => {
                    if (data.length != 0){
                        setBahan(data.values);
                        setDatalength(data.length)
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


    /*
    
    CREATE TABLE bahan(
    bahan_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
    bahan_name VARCHAR(255) UNIQUE NOT NULL,
    bahan_qty INTEGER NOT NULL
    );
    
    {id, bahan_name, bahan_qty}
    
    */
    

    const json_data = data['Bahan']
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
        count: Datalength,
      });
    return (
            <>
            

            <div className="container">
                {json_data.slice(firstContentIndex,lastContentIndex).map(i => {
                    return(
                        <div className="box" key={i.id}>
                            <BahanItem
                            id = {i.id}
                            src = {i.src}
                            alt = {i.alt}
                            title = {i.bahan_name}
                            quantity = {i.bahan_qty}
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
    
export default Bahan
