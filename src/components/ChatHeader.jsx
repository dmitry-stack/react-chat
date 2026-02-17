import React from "react";
import { Box, Avatar, Typography, IconButton, Tooltip } from "@mui/material";


const ChatHeader = ({ user, auth }) => (
  <Box sx={{ p: 2, bgcolor: "white", display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Avatar src={user?.photoURL} sx={{ width: 40, height: 40, border: '2px solid #1976d2' }}>
        {user?.displayName?.[0] || user?.email?.[0]}
      </Avatar>
      <Typography variant="subtitle1" fontWeight="700">
        {user?.displayName || user?.email.split('@')[0]}
      </Typography>
    </Box>

  </Box>
);

export default ChatHeader;