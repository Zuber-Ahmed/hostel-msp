import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";

export const Chand = ({ setTxtChand, txtChand, txtSuraj, setIsChandType }) => {
  const [txt, setTxt] = useState([]);

  return (
    <div className="chat-item">
      <h4>Chand</h4>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            value={txt}
            color="info"
            className="chattext"
            onFocus={() => setIsChandType(true)}
            onBlur={() => setIsChandType(false)}
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              setTxtChand([txt, ...txtChand]);
              setTxt("");
            }}
          >Send
          </Button>
        </Grid>
        {txtSuraj.map((item) => {
          return (
            <Grid item>
              <SnackbarContent color="success" message={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
