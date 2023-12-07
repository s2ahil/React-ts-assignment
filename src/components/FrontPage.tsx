import React, { useState } from "react";
import { TextField, Typography, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");


  const handleLogin = () => {
    // Check if all required fields are filled
    if (name && phoneNo && email) {



      localStorage.setItem("userDetails", JSON.stringify({ name, phoneNo, email }));

      
      navigate("/second"); // Redirect to the second page
    } else {
      // Display a message or alert indicating that the user must enter details
      alert("Please enter all details before proceeding.");
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Card
          variant="outlined"
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant={"h5"} margin={"10px"}>
            User Form
          </Typography>
          <TextField
            label="Name"
            sx={{ width: 300, margin: "20px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>


          <TextField
            label="Phone No"
            sx={{ width: 300, margin: "20px" }}
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          ></TextField>

          <TextField
            label="Email"
            sx={{ width: 300, margin: "20px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>


          <Button
            sx={{ width: 300, margin: "20px" }}
            style={{ backgroundColor: "green", color: "white" }}
          
            onClick={handleLogin}
          >
            login
          </Button>
        </Card>
      </div>
    </div>
  );
};

export { FrontPage };
