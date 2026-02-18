import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../main";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { doc, deleteDoc, collection, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { Container, Paper, CircularProgress, Box } from "@mui/material";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user, loadingAuth] = useAuthState(auth);
  const bottomRef = useRef();

  const [snapshot, loadingMessages] = useCollection(
    query(collection(firestore, "messages"), orderBy("createdAt", "asc"))
  );

  const messages = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    await addDoc(collection(firestore, "messages"), {
      uid: user.uid,
      displayName: user.displayName || user.email.split('@')[0],
      photoURL: user.photoURL,
      text: text,
      createdAt: serverTimestamp()
    });
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(firestore, "messages", id));
  };

  if (loadingAuth || loadingMessages) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

 return (
   
    <Container 
      
      sx={{ 
        flex: 1,
        height: "100vh", 
        p: 0, 
        display: "flex", 
        flexDirection: "column", 
        width: "100%", 
          maxWidth: "100%",
      }} 
      disableGutters
    >
      <Paper 
      
        sx={{ 
          height: "90vh", 
          display: "flex", 
          flexDirection: "column", 
          borderRadius: 0,
          overflow: "hidden" 
        }}
      >
        <ChatHeader user={user} auth={auth} />
        <MessageList 
          messages={messages} 
          user={user} 
          onDelete={deleteMessage} 
          bottomRef={bottomRef} 
        />
        <MessageInput onSendMessage={sendMessage} />
      </Paper>
    </Container>
  );
};

export default Chat;