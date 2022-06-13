import React, { useState, useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import axiosInstance from "../../axios";

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
  const navigate = useNavigate();
  // const { id } = useParams();

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
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDel = (id) => {
    axiosInstance
      .delete("delete/" + id + "/")
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      .then(function () {
        window.location.reload();
      });
  };

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
            <Link
              to={`/edit/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">Edit</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => handleDel(params.row.id)}
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
    fetch("http://localhost:8080/api/")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  return (
    <div className="datatable">
      <div className="new">
        <div className="left">Issues</div>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <div className="right">New Issue</div>
        </Link>
      </div>
      <DataGrid
        rows={tableData}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
