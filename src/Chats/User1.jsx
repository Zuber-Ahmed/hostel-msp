import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";

export const User1 = ({chatdata,setChatData,setistyping2 }) => {
  const [txt, setTxt] = useState([]);


  return (
    <React.Fragment>
      <h4>User1</h4>
      <Grid container>
        <Grid item xs={6}>
          <TextField
          className="inputbox"
            variant="outlined"
            label="Start messaging"
            style={{ width: "250px" }}
            value={txt}
            onFocus={()=>setistyping2(true)}
            onBlur={()=>setistyping2(false)}
            onChange={(e) => setTxt(e.target.value)}
          />
          <Button
            className="btn1"
            variant="contained"
            color="secondary"
            onClick={(key)=>{setChatData(key=[txt,...chatdata]);
                    setTxt('')}}
          >
            Send
          </Button>
        </Grid>
        <Grid item xs={4}>
          {chatdata.map((elm) => {
            return (
              <div className="wrapper1">
                <SnackbarContent className="msg1"
                title="hello" message={elm} />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
