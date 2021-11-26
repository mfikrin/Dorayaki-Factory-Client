import React, {useState, useEffect} from 'react'
import data from '../data/card.json'
import {useParams} from 'react-router-dom';
import "./Detail.css"
import Auth from "../Auth"


function Detail() {

  const [recDetail, setrecDetail] = useState([]);
  const [DetailLength, setDetailLength] = useState(0);
  const [nameDorayaki, setnameDorayaki] = useState();
  let dorayaki_name = [];
  let bahan_name = [];
  let quantity = [];

  useEffect(() =>{
      fetchDetail();
      
  },[])

  const pathname = window.location.pathname

  const splitting = pathname.split("/")
  const id_get = splitting[2] 

  const fetchDetail = async () => {
      try {
          await fetch("http://localhost:5000/resep/" + id_get,{
              method: "GET",
              headers: { "Content-Type": "application/json",
              "Authorization" :"Bearer "+Auth.getUser().accToken}
          }).then(response => response.json()
              .then(data => {
                  if (data.length != 0){
                      setrecDetail(data);
                      setDetailLength(data.length);
                      console.log("DATAA");
                      console.log(data);
                      setnameDorayaki(data[0].dora_name);
                  }
              })
          
          )
      }  
      catch (err){
          console.log(err);
      }
  }

  console.log(recDetail)
  
  var bahanNquantity = [];
  for (let i = 0 ; i < DetailLength ; i++){
      bahanNquantity.push([recDetail[i].bahan_name,recDetail[i].resep_qty])
  }

  console.log("BAHAN AND QUANTITY",bahanNquantity);
  console.log("NAMA DORAYAKI", nameDorayaki);

  var json_data = 
  {
    "id" : id_get, 
    "dorayaki_name" : nameDorayaki,
    "src" : "https://i.ibb.co/5GJ2KpC/dorayaki.png",
    "bahanNqty" : bahanNquantity
  };
  console.log("JSON DATA",json_data.dorayaki_name);



    return (
          <>
          <div className="details">
              <div className="img-frame">
                  <img src={json_data.src} className="prod-img"/>
              </div>
              <div className="text">
                  <h3>{json_data.dorayaki_name}</h3>
              </div>
              {json_data.bahanNqty.map((i,index) => {
                    return(
                        <div className="text__bahan" key={index}>
                             <p>
                                 Nama Bahan {index+1} : {i[0]}
                                 <br/>
                                 Jumlah Bahan {index+1} : {i[1]}
                             </p>
                        </div>
                    )
                  })
              }
              
          </div>
        </>
      )
}

export default Detail
