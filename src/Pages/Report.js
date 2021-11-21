import React , {useState} from 'react'
import { Button } from '../components/Button';
import Table , {SelectColumnFilter} from '../components/Table'
import "./Report.css"


const getData = () => [
  {
    name: "1ADorayaki",
    quantity: 4,
    status: "Accept",
    reqdate: "19/11/2021 14:46",
  },
  {
    name: "2BDorayaki",
    quantity: 8,
    status: "Accept",
    reqdate: "17/11/2021 14:46",
  },
  {
    name: "3BDorayaki CDo",
    quantity: 7,
    status: "Reject",
    reqdate: "17/11/2021 14:42",
  },
  {
    name: "4BDorayaki CEo",
    quantity: 9,
    status: "Accept",
    reqdate: "17/11/2021 15:46",
  },
  {
    name: "5CDorayaki",
    quantity: 11,
    status: "Accept",
    reqdate: "12/11/2021 14:46",
  },
  {
    name: "6DDorayaki",
    quantity: 15,
    status: "Reject",
    reqdate: "29/11/2021 14:46",
  },
  {
    name: "7ADorayaki",
    quantity: 4,
    status: "Accept",
    reqdate: "19/11/2021 14:46",
  },
  {
    name: "8BDorayaki",
    quantity: 8,
    status: "Accept",
    reqdate: "17/11/2021 14:46",
  },
  {
    name: "9BDorayaki CDo",
    quantity: 7,
    status: "Reject",
    reqdate: "17/11/2021 14:42",
  },
  {
    name: "10BDorayaki CEo",
    quantity: 9,
    status: "Accept",
    reqdate: "17/11/2021 15:46",
  },
  {
    name: "11CDorayaki",
    quantity: 11,
    status: "Accept",
    reqdate: "12/11/2021 14:46",
  },
  {
    name: "12DDorayaki",
    quantity: 15,
    status: "Reject",
    reqdate: "29/11/2021 14:46",
  },
  {
    name: "13ADorayaki",
    quantity: 4,
    status: "Accept",
    reqdate: "19/11/2021 14:46",
  },
  {
    name: "14BDorayaki",
    quantity: 8,
    status: "Accept",
    reqdate: "17/11/2021 14:46",
  },
  {
    name: "15BDorayaki CDo",
    quantity: 7,
    status: "Reject",
    reqdate: "17/11/2021 14:42",
  },
  {
    name: "16BDorayaki CEo",
    quantity: 9,
    status: "Accept",
    reqdate: "17/11/2021 15:46",
  },
  {
    name: "17CDorayaki",
    quantity: 11,
    status: "Accept",
    reqdate: "12/11/2021 14:46",
  },
  {
    name: "18DDorayaki",
    quantity: 15,
    status: "Reject",
    reqdate: "29/11/2021 14:46",
  },{
    name: "19ADorayaki",
    quantity: 4,
    status: "Accept",
    reqdate: "19/11/2021 14:46",
  },
  {
    name: "20BDorayaki",
    quantity: 8,
    status: "Accept",
    reqdate: "17/11/2021 14:46",
  },
  {
    name: "21BDorayaki CDo",
    quantity: 7,
    status: "Reject",
    reqdate: "17/11/2021 14:42",
  },
  {
    name: "22BDorayaki CEo",
    quantity: 9,
    status: "Accept",
    reqdate: "17/11/2021 15:46",
  },
  {
    name: "23CDorayaki",
    quantity: 11,
    status: "Accept",
    reqdate: "12/11/2021 14:46",
  },
  {
    name: "24DDorayaki",
    quantity: 15,
    status: "Reject",
    reqdate: "29/11/2021 14:46",
  },{
    name: "25ADorayaki",
    quantity: 4,
    status: "Accept",
    reqdate: "19/11/2021 14:46",
  },
  {
    name: "26BDorayaki",
    quantity: 8,
    status: "Accept",
    reqdate: "17/11/2021 14:46",
  },
  {
    name: "27BDorayaki CDo",
    quantity: 7,
    status: "Reject",
    reqdate: "17/11/2021 14:42",
  },
  {
    name: "28BDorayaki CEo",
    quantity: 9,
    status: "Accept",
    reqdate: "17/11/2021 15:46",
  },
  {
    name: "29CDorayaki",
    quantity: 11,
    status: "Accept",
    reqdate: "12/11/2021 14:46",
  },
  {
    name: "30DDorayaki",
    quantity: 15,
    status: "Reject",
    reqdate: "29/11/2021 14:46",
  },
];

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
            Cell: ({cell}) => (<Button onClick={()=> alert(cell.row.values.status)}>Change</Button>)
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
