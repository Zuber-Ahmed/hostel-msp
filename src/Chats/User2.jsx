import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";

export const User2 = ({chatdata,setChatData,setistyping}) => {
  const [txt, setTxt] = useState([]);

  return (
    <React.Fragment>
      <h4>User2</h4>
      <Grid container>
        <Grid item xs={6}>
          <TextField
          className="inputbox"
            value={txt}
            variant="outlined"
            label="Start messaging"
            style={{ width: "250px" }}
            onFocus={()=>setistyping(true)}
            onBlur={()=>setistyping(false)}
            onChange={(e) => setTxt(e.target.value)}
          />
          <Button
          className="btn2"
            variant="contained"
            color="secondary"
            onClick={()=>
                {setChatData([txt,...chatdata]);
                setTxt('')}}
          >
            Send
          </Button>
        </Grid>
        {chatdata.map((elm)=>{

                return( 
                     <Grid item>
                    <SnackbarContent  style={{margin:"20px"}} message={elm}/>
                    </Grid>
                )
                }
                )}
      </Grid>
    </React.Fragment>
  );
};
