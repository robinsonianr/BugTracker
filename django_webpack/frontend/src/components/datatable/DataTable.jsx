import React, { useState, useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { async } from "@firebase/util";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 500 },
  {
    field: "priority",
    headerName: "Priority",
    width: 90,
    renderCell: (params) => {
      return (
        <div className={`cellWithPriority ${params.row.priority}`}>
          {params.row.priority}
        </div>
      );
    },
  },
  {
    field: "issue_type",
    headerName: "Issue Type",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithIssue ${params.row.issue_type}`}>
          {params.row.issue_type}
        </div>
      );
    },
  },
  { field: "date_added", headerName: "Dated added", width: 220 },
  { field: "created_by", headerName: "Created By", width: 130 },
];

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Issues"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Issues", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="editButton">Edit</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/issues/api/issue")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  return (
    <div className="datatable">
      <div className="new">
        <div className="left">Issues</div>
        <Link to="/create-issue" style={{ textDecoration: "none" }}>
          <div className="right">New Issue</div>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
