import React from 'react'
import data from '../data/card.json'
import {useParams} from 'react-router-dom';
import "./Detail.css"
function Detail() {



    function filterById(jsonObject, id) {
      return jsonObject.filter(function(jsonObject) {
          return (jsonObject['id'] == id);
      })[0];
    }

    const json_data = data['cards'];
    const pathname = window.location.pathname

    const splitting = pathname.split("/")
    const id = splitting[2] 

    const data_detail = filterById(json_data,id)

    console.log(data_detail)



    return (
          <>
            <div className="details">
              <div className="img-frame">
                  <img src={data_detail.src} alt={data_detail.alt} className="prod-img"/>
              </div>
              <div className="text">
                  <h3>{data_detail.title}</h3>
              </div>
            </div>

          </>
      )
}

export default Detail
