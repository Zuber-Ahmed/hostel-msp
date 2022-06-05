import React, { useState } from "react";
import { Grid, Button, TextField, SnackbarContent } from "@mui/material";

export const Suraj = ({ setTxtSuraj, txtSuraj, txtChand, setIsSurajType }) => {
  const [txt, setTxt] = useState([]);

  return (
    <div className="chat-item">
      <h4>Suraj</h4>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            value={txt}
            color="info"
            className="chattext"
            onBlur={setIsSurajType(true)}
            onFocus={setIsSurajType(false)}
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={() => {
                setTxtSuraj([txt, ...txtSuraj]);
              setTxt("");
            }}
          >
            Send
          </Button>
        </Grid>
        {txtChand.map((item) => {
          return (
            <Grid item>
              <SnackbarContent message={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
