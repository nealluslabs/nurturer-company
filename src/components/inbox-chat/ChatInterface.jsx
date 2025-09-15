import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  IconButton,
  Chip
} from '@mui/material';
import { Search, Send, CheckCircleOutline, ArrowBack } from '@mui/icons-material';
import Image from "../../assets/Group-2.png";

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('touches');

  const mockChats = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'Hey, how are you doing?',
      timestamp: '2:30 PM',
      unread: 2
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'Thanks for the update!',
      timestamp: '1:45 PM',
      unread: 0
    },
    {
      id: 3,
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3',
      lastMessage: 'Let me know when you\'re free',
      timestamp: '12:20 PM',
      unread: 1
    }
  ];

  const mockMessages = [
    { id: 1, text: 'Hello! How are you doing today?', sender: 'them', time: '2:30 PM' },
    { id: 2, text: 'I\'m doing great, thanks for asking! How about you?', sender: 'me', time: '2:31 PM' }
  ];

  return (
    <Box
      sx={{
        mt: 2,
        mx: 'auto',
        width: { xs: '100%', sm: '95%', md: '90%' },
        height: { xs: 'calc(100vh - 120px)', sm: 'calc(100vh - 150px)' },
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#ffffff',
        position: 'relative',
        zIndex: 1100
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '35%' },
          height: { xs: selectedChat ? '0' : 'auto', md: '100%' },
          backgroundColor: '#ffffff',
          borderRight: { xs: 'none', md: '1px solid #e0e0e0' },
          borderBottom: { xs: selectedChat ? 'none' : '1px solid #e0e0e0', md: 'none' },
          display: 'flex',
          flexDirection: 'column',
          overflow: { xs: selectedChat ? 'hidden' : 'visible', md: 'visible' }
        }}
      >
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0'
          }}
        >
          <TextField
            fullWidth
            placeholder="Search or start new chat"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#666', fontSize: { xs: 18, sm: 24 } }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }
            }}
          />
        </Box>

        <Box
        sx={{
            p: { xs: 1.5, sm: 2 }
        }}
        >
        <Typography variant="h5" sx={{ color: '#0d9ba1', fontWeight: 500, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Inbox
        </Typography>
        </Box>

        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <List>
            {mockChats.map((chat) => (
              <ListItem
                key={chat.id}
                button
                onClick={() => setSelectedChat(chat)}
                sx={{
                  borderBottom: '1px solid #f0f0f0',
                  backgroundColor: selectedChat?.id === chat.id ? '#f0f8ff' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                <ListItemAvatar>
                  <Box sx={{ position: 'relative' }}>
                    <Avatar src={Image} sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }} />
                    <CheckCircleOutline
                      sx={{
                        position: 'absolute',
                        bottom: -4,
                        right: -4,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        color: 'green',
                        fontSize: { xs: 14, sm: 16 }
                      }}
                    />
                  </Box>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {chat.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        6 days ago
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '150px'
                        }}
                      >
                        {chat.lastMessage}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '65%' },
          height: { xs: '100%', md: '100%' },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff'
        }}
      >
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            backgroundColor: '#0d9ba1',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          {selectedChat ? (
            <>
              <IconButton
                sx={{
                  color: 'white',
                  display: { xs: 'block', md: 'none' },
                  p: 0.5
                }}
                onClick={() => setSelectedChat(null)}
              >
                <ArrowBack />
              </IconButton>
              <Box sx={{ position: 'relative' }}>
                <Avatar src={Image} sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }} />
                <CheckCircleOutline
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -2, sm: -3 },
                    right: { xs: -2, sm: -3 },
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    color: 'green',
                    fontSize: { xs: 12, sm: 14 }
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {selectedChat.name}
              </Typography>
            </>
          ) : (
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Select a conversation
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            flex: 1,
            p: { xs: 1.5, sm: 2 },
            backgroundColor: '#f8f9fa',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}
        >
          {selectedChat ? (
            mockMessages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    width: '350px',
                    backgroundColor: msg.sender === 'me' ? '#0d9ba1' : '#ffffff',
                    color: msg.sender === 'me' ? 'white' : 'inherit',
                    borderRadius: '16px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    {msg.text}
                  </Typography>
                </Paper>
              </Box>
            ))
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              <Typography variant="body1" color="text.secondary">
                Select a conversation to start chatting
              </Typography>
            </Box>
          )}
        </Box>

        {selectedChat && (
          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <TextField
              fullWidth
              placeholder="Type a message..."
              variant="outlined"
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }
              }}
            />
            <IconButton
              sx={{
                backgroundColor: '#0d9ba1',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#0a8a94'
                },
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 }
              }}
            >
              <Send sx={{ fontSize: { xs: 18, sm: 24 } }} />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatInterface;
