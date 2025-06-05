'use client'; // Mark the component as a Client Component
import HeaderFooter from '@/components/HeaderFooter';
import React from 'react';
import useGetAllUserConversations from '@/hooks/Conversations/useGetAllUserConversations';
import Main from '@/components/Conversations/Main';
import useStoreConversations from '@/hooks/Conversations/useStoreConversations';
import { PathProvider } from '@/components/PathProvider';

export default function Conversations() {
  const { data } = useGetAllUserConversations({ userId: '1' }, true);
  const retrieved = useStoreConversations(data ?? []);
  return (
    <PathProvider path={'conversation'}>
      <HeaderFooter title="Conversations">
        <Main conversations={retrieved} title={'Conversations'} />
      </HeaderFooter>
    </PathProvider>
  );
}
