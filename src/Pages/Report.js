import React , {useState} from 'react'
import { Button } from '../components/Button';
import Table  from '../components/Table'
import "./Report.css"
import data from "../data/table.json"


const getData = () => data;

function Report() {

  // const [status,setstatus] = useState("Reject");
  // const list = ["Reject","Accept"]
  

  // const handleClick = () => setstatus(status ? "Reject" : "Accept");
    const columns = React.useMemo(
        () => [
          {
            Header: "Dorayaki Name",
            accessor: "name",
          },
          {
            Header: "Quantity",
            accessor: "quantity",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Request Date", 
            accessor: "reqdate",
          },
          {
            Header: "Change Status",
            accessor: "action",
            // Cell: ({value}) => (<button onClick={this.editRow({value})}>Edit</button>)value = {cell.row.values.status} 
            Cell: ({cell}) => (<Button linkto="#" onClick={()=> alert(cell.row.values.status)}>Change</Button>)
            // Cell: ({cell}) => (<button onClick={handleClick}>Button</button>)
          }
        ],
        []
      );

    const data = React.useMemo(() => getData(), []);


    return (
        <>
            <div className="container__report">
                  <div class="histitle">
                    <h2>Request Dorayaki</h2>
                  </div>

                <Table columns={columns} data={data} />
            </div>
        </>
        
    )
}

export default Report
