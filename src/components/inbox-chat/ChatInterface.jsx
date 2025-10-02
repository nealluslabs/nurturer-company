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
import { useSelector } from 'react-redux';

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('touches');

 // const { isAuth, user, company } = this.state.first.auth || { isAuth: true/*, user: { uid: 'test' }*/ };

  const { user,company} = useSelector((state) => state.auth);

  let mockChats = [/*
    {
      id: 1,
      name: 'Nurturer Support',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'Hey, how are you doing?',
      timestamp: '2:30 PM',
      unread: 2
    },
    {
      id: 2,
      name: 'Nurturer Support',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'Thanks for the update!',
      timestamp: '1:45 PM',
      unread: 0
    },
    {
      id: 3,
      name: 'Nurturer Support',
      avatar: 'https://i.pravatar.cc/150?img=3',
      lastMessage: 'Let me know when you\'re free',
      timestamp: '12:20 PM',
      unread: 1
    }
  */];



  if (company && company.tickets &&  company.tickets.length) {
    let allMessages = [];
   company.tickets.forEach(message => {
       allMessages.push(
        {
          ...message,
          name:message.messageTitle ,
          avatar: 'https://i.pravatar.cc/150?img=1',
          lastMessage: message.messageTitle,
          timestamp: '2:30 PM',
          unread: 2
        },
       )
    
   })

   mockChats = [...allMessages]
  
  }


  const [mockMessages,setMockMessages] = useState([
    { id: 1, text: 'Thank you for your payment. Your subscription has been renewed.', sender: 'them', time: '2:30 PM' }
  ]);


  function updateMockMessages(message) {
console.log("AFTER SELECTING, WHAT IS MOCK MESSAGES--->",mockMessages)
     setMockMessages([
      {
        ...message,
        text:message.messageContent && message.messageContent

      }
     ])

     
    
  }


 
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
                
                onClick={() => {setSelectedChat(chat); updateMockMessages(chat)}}
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
                  </Box>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {chat.messageSender}
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
                        {chat.messageTitle}
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
            backgroundColor: '#34495e',
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
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {selectedChat.messageSender}
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
            backgroundColor: '#b3b3b3',
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
                    p: 3,
                    width: '80%',
                    minHeight: '80px',
                    backgroundColor: msg.sender === 'me' ? '#ffffff' : '#ffffff',
                    color: 'black',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Typography variant="body1" sx={{ textAlign: 'left', fontSize: '0.8rem' }}>
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
