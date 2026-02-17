import React from "react";
import { Box, Avatar, Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const MessageList = ({ messages, user, onDelete, bottomRef }) => (
  <Box sx={{ flexGrow: 1, overflowY: "auto", p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
    {messages?.map((m) => {
      const isMe = user?.uid === m.uid;
      return (
        <Box key={m.id} sx={{ display: "flex", justifyContent: isMe ? "flex-end" : "flex-start", gap: 1 }}>
          {!isMe && <Avatar src={m.photoURL} sx={{ width: 32, height: 32 }}>{m.displayName?.[0]}</Avatar>}
          <Box sx={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', alignItems: isMe ? 'flex-end' : 'flex-start' }}>
            <Typography variant="caption" sx={{ mb: 0.5, fontWeight: '600', color: 'text.secondary' }}>
              {m.displayName}
            </Typography>
            <Paper sx={{ 
              p: 1.5, 
              bgcolor: isMe ? "#1976d2" : "white", 
              color: isMe ? "white" : "black",
              borderRadius: isMe ? "15px 2px 15px 15px" : "2px 15px 15px 15px",
              position: 'relative' 
            }}>
              <Typography variant="body2">{m.text}</Typography>
              {isMe && (
                <IconButton 
                  size="small" 
                  onClick={() => onDelete(m.id)}
                  sx={{ position: 'absolute', top: -10, right: -10, bgcolor: 'white', width: 20, height: 20, border: '1px solid #eee' }}
                >
                  <DeleteIcon sx={{ fontSize: 12, color: 'red' }} />
                </IconButton>
              )}
            </Paper>
          </Box>
        </Box>
      );
    })}
    <div ref={bottomRef} />
  </Box>
);

export default MessageList;