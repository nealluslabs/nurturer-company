import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

export default function SettingsPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    setStatus(null);

    if (!newPassword || !confirmPassword) {
      setStatus({ type: 'error', message: 'Both fields are required.' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: "Passwords don't match." });
      return;
    }
    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'Password must be at least 6 characters.' });
      return;
    }

    setLoading(true);
    try {
      // TODO: wire to real change-password API (Firebase/Auth) when available
      await new Promise((res) => setTimeout(res, 800));
      setStatus({ type: 'success', message: 'Password changed successfully.' });
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to change password. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mx={2} pr={4} mt={0.5}>
      <Typography
        sx={{
          fontFamily: 'inter',
          fontWeight: 'bold',
          fontSize: '18px',
          display: 'inline-block',
          borderBottom: '2px solid #000000'
        }}
        mb={3}
        px={0.5}
      >
        SETTINGS
      </Typography>

      <Box mt={3} sx={{ maxWidth: 480 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 1 }}>Change Password</Typography>
        <Typography sx={{ color: '#666', fontSize: 13, mb: 2 }}>Enter a new password and confirm it below.</Typography>

        {status && (
          <Alert severity={status.type} sx={{ mb: 2 }}>
            {status.message}
          </Alert>
        )}

        <TextField
          fullWidth
          label="New password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Confirm new password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          onClick={handleChangePassword}
          disabled={loading}
          sx={{
            textTransform: 'none',
            boxShadow: 'none',
            backgroundColor: '#000000',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#000000',
              boxShadow: 'none'
            }
          }}
        >
          {loading ? 'Changing...' : 'Change password'}
        </Button>
      </Box>
    </Box>
  );
}
