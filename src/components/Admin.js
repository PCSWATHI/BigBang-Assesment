import React, { useState } from "react";
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
import { useEffect } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function Admin() {
 
  return (
    <Box>
      <br />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: "20px",
          textAlign: "center",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        Admin's Page
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              borderRight: "1px solid #ccc",
              paddingRight: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ marginBottom: "10px" }}
            >
              Doctor
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/add-doctor"
            >
              Add a Doctor
            </Button>

            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/delete-doctor"
            >
              Delete a Doctor
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/update-doctor"
            >
              Update Doctor
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/getall-doctor"
            >
              Show Doctor Details
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/get-doctor-id"
            >
              Get Doctor Detail by ID
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/activate-doctor"
            >
              Activate Doctor
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: "10px" }}
              component={Link}
              to="/deactivate-doctor"
            >
              Deactivate Doctor
            </Button>
          </Box>
        </Grid>
      </Grid>
     
      </Box>
  );
}

export default Admin;
