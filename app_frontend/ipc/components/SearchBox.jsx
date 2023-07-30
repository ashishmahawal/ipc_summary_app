import React from "react";
import { UseStateContext } from "../context/StateContext";
import axios from "axios";
import {Button, TextField} from '@mui/material';
import SelectTextFields from "./SelectTextField";
import {Typography} from "@mui/material";

const SearchBox = () => {
  const {
    showResult,
    setShowResult,
    ipcCode,
    setIpcCode,
    ipcSummary,
    setIpcSummary,
  } = UseStateContext();

  const getIpcCodeSummary = async () => {
    const lang = document.getElementById("lang").value;
    let response = { data: "some demo data" };
    let url = `http://127.0.0.1:5000/ipc?code=${ipcCode}&lang=${lang}`;

    response = await axios.get(url);
    if (!response) {
      response = { data: "no data returned from server...." };
    }
    setIpcSummary(response.data);
  };

  const updateIpcCode = (e) => {
    console.log(e.target.value);
    setIpcCode(e.target.value);
  };


  return (
    <>
      <div className="search-container">
      <TextField  id="outlined-basic" label="IPC Code" variant="outlined" onChange={(e) => updateIpcCode(e)}/>
        <SelectTextFields  id="lang" onSelect={(e) => {updateLang(e)}}></SelectTextFields>
    
        <Button
        variant="contained"
        color="success"
          type="submit"
          onClick={() => {
            getIpcCodeSummary()
            setShowResult(true)
            
          }}
        >
          Submit
        </Button>
      </div>
      <br/>
      <div className="result-container">
        
        {showResult ? <Typography variant="body1" gutterBottom>{ipcSummary}</Typography> : null}
      </div>
    </>
  );
};

export default SearchBox;
