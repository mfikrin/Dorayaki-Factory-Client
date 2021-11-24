import React from 'react'
import './Bahan.css'
import CardItem from './CardItem'
import data from '../data/Bahan.json'
import Pagination from './Pagination'
import BahanItem from './BahanItem'
// import img from '../img/dorayaki.png'

function Bahan() {

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
        count: json_data.length,
      });
    return (
            <>
            {/* {console.log(data)} */}

            <div className="container">
                {json_data.slice(firstContentIndex,lastContentIndex).map(i => {
                    return(
                        <div className="box" key={i.id}>
                            <BahanItem
                            id = {i.id}
                            src = {i.src}
                            alt = {i.alt}
                            title = {i.title}
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
