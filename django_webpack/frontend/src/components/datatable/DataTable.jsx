import React, {useState, useEffect} from "react";
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'description', headerName: 'Description', width: 500 },
  {
    field: 'priority',
    headerName: 'Priority',
    type: 'charField',
    width: 90,
  },
  {
    field: 'issue_type',
    headerName: 'Issue Type',
    width: 100,
    // valueGetter: (params) => `${params.columns.issue_type}`
  },
  { field: 'date_added', headerName: 'Dated added', width: 220 },
  { field: 'created_by', headerName: 'Created By', width: 130 }
];


export default function DataTable() {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
         fetch("http://localhost:8080/issues/api/issue")
        .then((data) => data.json())
        .then((data) => setTableData(data)) 
    }, [])
  return (
    <div className="datatable">
         <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
