import React , {useEffect, useState} from 'react'
import { Button } from '../components/Button';
import Table  from '../components/Table';
import Auth from '../Auth';
import "./Report.css"
import Axios from 'axios';
// import data from "../data/table.json"
// var thedata = [];
// async function getRequest(){
//   try{
//     await fetch("http://localhost:5000/request", {
//       method: "GET",
//       headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
//     }).then(response => response.json().then(data => {
//       if(data.length != 0){
//         console.log(data)
//         thedata = data;
//       }
//     }));
//   }
//   catch(err){
//     console.error(err.message);
//   }
// };
async function changeRequest(request_id,status){
  try{
    const body = {request_id,status};
    await fetch("http://localhost:5000/request", {
      method: "PUT",
      headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken},
      body : JSON.stringify(body)
    });
    window.location.reload(false);
  }
  catch(err){
    console.error(err.message);
  }
};

const Report = () => {
    const [thedata,setData] = useState([]);
    useEffect(() =>{
      const getRequest = async()=>{
        try{
          await fetch("http://localhost:5000/request", {
            method: "GET",
            headers: { "Content-Type": "application/json","Authorization" :"Bearer "+Auth.getUser().accToken}
          }).then(response => response.json().then(data => {
            if(data.length != 0){
              console.log(data)
              setData(data);
            }
          }));
        }
        catch(err){
          console.error(err.message);
        }
      };
      getRequest();
    },[]);

    const getData = () => thedata;
    const columns = React.useMemo(
        () => [
          {
            Header: "Request ID",
            accessor: "request_id",
          },
          {
            Header: "Dorayaki Name",
            accessor: "dora_name",
          },
          {
            Header: "Quantity",
            accessor: "req_qty",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "IP",
            accessor: "ip",
          },
          {
            Header: "Timestamp", 
            accessor: "timestamp_req",
          },
          {
            Header: "Reject",
            accessor: "rej",
            // Cell: ({value}) => (<button onClick={this.editRow({value})}>Edit</button>)value = {cell.row.values.status} 
            Cell: ({cell}) => (<Button linkto="#" onClick={()=> changeRequest(cell.row.values.request_id,"rejected")}>Reject</Button>)
            // Cell: ({cell}) => (<button onClick={handleClick}>Button</button>)
          },
          {
            Header: "Accept",
            accessor: "acc",
            // Cell: ({value}) => (<button onClick={this.editRow({value})}>Edit</button>)value = {cell.row.values.status} 
            Cell: ({cell}) => (<Button linkto="#" onClick={()=> changeRequest(cell.row.values.request_id,"accepted")}>Accept</Button>)
            // Cell: ({cell}) => (<button onClick={handleClick}>Button</button>)
          }
        ],
      );
    const reqdata = React.useMemo(() => getData());
    return (
        <>
            <div className="container__report">
                  <div class="histitle">
                    <h2>Request Dorayaki</h2>
                  </div>

                <Table columns={columns} data={reqdata} />
            </div>
        </>
        
    )
}

export default Report
