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
        fetchBahan1();

    },[])

    const fetchBahan1 = async () => {
        try {
            await fetch("http://localhost:5000/bahan",{
                method: "GET",
                headers: { "Content-Type": "application/json",
                "Authorization" :"Bearer "+Auth.getUser().accToken}
            }).then(response => response.json()
                .then(data => {
                    if (data.length != 0){
                        setBahan(data);
                        setDatalength(data.length);
                        console.log("DATAA");
                        console.log(data);
                    }
                })
            )
        }  
        catch (err){
            console.log(err);
        }
    }
    console.log("TEST",bahan.length);
    console.log("PANJANG", Datalength)

    for (let i=0; i<Datalength; i++) {
        console.log("FOR LOOP",bahan[i]);
    }

    var json_data_bahan = [];
    for (let i = 0 ; i < Datalength ; i++){
        let id = bahan[i].bahan_id;
        let bahan_name = bahan[i].bahan_name;
        let quantity_temp = bahan[i].bahan_qty;
        json_data_bahan.push(
            {"id" : id, 
            "bahan_name" : bahan_name,
            "src" :"https://i.ibb.co/5GJ2KpC/dorayaki.png",
            "quantity": quantity_temp
            }
        );
    }

    /*
    
    CREATE TABLE bahan(
    bahan_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
    bahan_name VARCHAR(255) UNIQUE NOT NULL,
    bahan_qty INTEGER NOT NULL
    );
    
    {id, bahan_name, bahan_qty}
    
    */
    

    // const json_data = data['Bahan']
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
                {json_data_bahan.slice(firstContentIndex,lastContentIndex).map(i => {
                    return(
                        <div className="box" key={i.id}>
                            <BahanItem
                            id = {i.id}
                            src = {i.src}
                            bahanName = {i.bahan_name}
                            quantity = {i.quantity}
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
