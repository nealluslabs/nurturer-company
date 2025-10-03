import React from 'react';
import { Helmet } from 'react-helmet-async';
import InboxBanner from '../components/inbox-chat/Banner';
import ChatInterface from '../components/inbox-chat/ChatInterface';

export default function InboxApp() {
  return (
    <>
      <Helmet>
        <title> Inbox | Dashboard </title>
      </Helmet>

      <InboxBanner />

      <ChatInterface />
    </>
  );
}
