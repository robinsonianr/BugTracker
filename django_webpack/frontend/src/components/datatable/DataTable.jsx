import React, {useState, useEffect} from "react";
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  {
    field: 'priority',
    headerName: 'Priority',
    type: 'charField',
    width: 90,
  },
  {
    field: 'issue_type',
    headerName: 'Issue Type',
    width: 160,
  },
  { field: 'date_added', headerName: 'Dated added', width: 130 },
  { field: 'created_by', headerName: 'Created By', width: 130 }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', priority: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div className="datatable">
         <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
