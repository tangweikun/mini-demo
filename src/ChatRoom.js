import React, { useState } from 'react';
import { Button } from 'antd';
import { Chat, Channel } from 'stream-chat-react';
import { ChannelHeader, MessageList, Window } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import './ChatRoom.css';
import 'stream-chat-react/dist/css/index.css';
import MoodPanel from './MoodPanel';
import PointPanel from './PointPanel';
import CategoryPanel from './CategoryPanel';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGVsaWNhdGUtZ2xhZGUtMiJ9.ci1VDm8mYrdgARG0BEhfoCWJPN3fXUStJbUNZAc9c44';

chatClient.setUser(
  {
    id: 'delicate-glade-2',
    name: 'Delicate glade',
    image: 'https://getstream.io/random_png/?id=delicate-glade-2&name=Delicate+glade',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});

function ChatRoom() {
  const [showMoodPanel, setShowMoodPanel] = useState(false);
  const [showPointPanel, setShowPointPanel] = useState(false);
  const [showCategoryPanel, setShowCategoryPanel] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <Chat client={chatClient} theme={'messaging'}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>

      <Button
        type="primary"
        style={{ position: 'fixed', bottom: 0, zIndex: 1000 }}
        onClick={() => {
          setShowMoodPanel(true);
        }}
      >
        Press me
      </Button>

      {/* 选择心情 */}
      {showMoodPanel && (
        <MoodPanel setShowMoodPanel={setShowMoodPanel} setShowPointPanel={setShowPointPanel} />
      )}

      {/* 选择强烈指数 */}
      {showPointPanel && (
        <PointPanel
          setShowMoodPanel={setShowMoodPanel}
          setShowPointPanel={setShowPointPanel}
          setShowCategoryPanel={setShowCategoryPanel}
        />
      )}

      {/* 选择影响因素 */}
      {showCategoryPanel && (
        <CategoryPanel channel={channel} setShowCategoryPanel={setShowCategoryPanel} />
      )}
    </div>
  );
}

export default ChatRoom;
