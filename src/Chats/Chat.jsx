import React, { useState, useEffect } from "react";
import { Grid, Badge } from "@mui/material";
import "../Chats/Chat.css";
import { Chand } from "./Chand";
import { Suraj } from "./Suraj";

export const Chat = () => {
  const [txtChand, setTxtChand] = useState([]);
  const [txtSuraj, setTxtSuraj] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [isChandType, setIsChandType] = useState(false);
  const [isSurajType, setIsSurajType] = useState(false);

  useEffect(() => {
    setChatData([txtChand,...txtSuraj]);
    console.log(chatData);
  }, [txtChand, txtSuraj]);

  return (
    <div className="chat-container">
      <h2>Chat App</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Badge
            color="error"
            badgeContent={isSurajType ? "Suraj Typing..." : 0}
            >
          <Chand
            setTxtChand={setTxtChand}
            txtChand={txtChand}
            txtSuraj={txtSuraj}
            setIsChandType={setIsChandType}
            />
            </Badge>
        </Grid>
        <Grid item xs={6}>
          <Badge
            color="error"
            style={{ width: "100px" }}
            badgeContent={isChandType ? "Chand Typing..." : 0}
          ></Badge>
          <Suraj
            setTxtSuraj={setTxtSuraj}
            txtSuraj={txtSuraj}
            txtChand={txtChand}
            setIsSurajType={setIsSurajType}
          />
        </Grid>
      </Grid>
    </div>
  );
};
