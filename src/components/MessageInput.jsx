import React, { useState } from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const MessageInput = ({ onSendMessage }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (value.trim()) {
      onSendMessage(value);
      setValue("");
    }
  };

  return (
    <Box sx={{ p: 2, bgcolor: "white", borderTop: '1px solid #eee' }}>
      <TextField
        fullWidth
        variant="standard"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
        InputProps={{
          disableUnderline: true,
          sx: { bgcolor: '#f0f2f5', borderRadius: '25px', px: 2, py: 0.8 },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSend} disabled={!value.trim()} color="primary">
                <SendRoundedIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
};

export default MessageInput;