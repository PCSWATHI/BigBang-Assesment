import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  CardContent,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";

function GetAllDoctors() {
  const [doctors, setDoctors] = useState([]);
  

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://localhost:7174/api/Admin/alldoctors"
        );
        const data = await response.json();
        console.log(data);
        setDoctors(data);
        console.log(doctors);
      } catch (error) {
        <Alert severity="error">Error fetching details</Alert>
      }
    };

    fetchDoctors();
  }, []);



  return (
    <>
     

      {doctors.map((parse_doctor) => (
        <Card variant="outlined" key={parse_doctor.doctorId}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              All Doctor Details
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                component="div"
                style={{ marginRight: "5px" }}
              >
                {parse_doctor.firstName} {parse_doctor.lastName}
              </Typography>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Contact Number: {parse_doctor.contactNumber}
            </Typography>
            <Typography variant="body2">
              E-Mail: {parse_doctor.email}
              <br />
              Specialization: {parse_doctor.specialization}
            </Typography>
            <Typography variant="body2">
              Experience: {parse_doctor.experience}
              <br />
              Hospital: {parse_doctor.hospital}
            </Typography>
            <Typography variant="body2">
              Qualification: {parse_doctor.qualification}
              <br />
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default GetAllDoctors;
