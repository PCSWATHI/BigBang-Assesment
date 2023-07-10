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


const handleActivateClick = async (event,open,handleClose) => {
    
   
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const activate_id = data.get("doctoractivateid");
    const url = `https://localhost:7174/api/Admin/doctor/${activate_id}/setActive`;

    try {
      console.log("Inside try block");
      const response = await axios.post(url);
      if (response.status === 200) {
        <Alert severity="success">Doctor activated successfully !!!</Alert>
      }
    } catch (error) {
      // Handle any errors
      if (error.response && error.response.status === 400) {
        <Alert severity="error">Doctor does not exist !!!</Alert>
      }
    }
  };

function ActivateDoctor(){
    const [open, setOpen] = useState(false);
   
    return(<Box sx={{ marginTop: "20px" }}>
    <Typography
      variant="subtitle2"
      component="h3"
      sx={{ marginBottom: "10px" }}
    >
      Activate Doctor
    </Typography>

    <Box
      component="form"
      onSubmit={handleActivateClick}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="doctoractivateid"
        label="Doctor ID"
        name="doctoractivateid"
        autoComplete="name"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Activate Doctor
      </Button>
    </Box>
  </Box>)
}

export default ActivateDoctor;