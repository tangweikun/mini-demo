import React, { useState } from 'react';
import { Button, Slider } from 'antd';
import { Chat, Channel, Attachment } from 'stream-chat-react';
import { ChannelHeader, MessageList, Window } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import './ChatRoom.css';
import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGVsaWNhdGUtZ2xhZGUtMiJ9.ci1VDm8mYrdgARG0BEhfoCWJPN3fXUStJbUNZAc9c44';

class MyAttachmentComponent extends React.Component {
  render() {
    const { attachment } = this.props;
    if (attachment.type === 'product') {
      return (
        <div className="product">
          Product:
          <a href={attachment.url} target="_blank">
            <img src={attachment.image} height={'100px'} />
            <br />
            {attachment.name}
          </a>
        </div>
      );
    } else {
      return (
        <div>
          testing
          <Attachment {...this.props} />
        </div>
      );
    }
  }
}

const MOODS = [
  [
    { label: 'Loving', theme: 'orange', points: 50 },
    { label: 'Joyful', theme: 'orange', points: 50 },
    { label: 'Optimistic', theme: 'green', points: 50 },
    { label: 'Tired', theme: 'gray', points: 50 },
    { label: 'Annoyed', theme: 'red', points: 50 },
    { label: 'Frustrated', theme: 'red', points: 50 },
    { label: 'Insecure', theme: 'purple', points: 50 },
    { label: 'Ashamed', theme: 'blue', points: 50 },
  ],
  [
    { label: 'Excited', theme: 'orange', points: 50 },
    { label: 'Happy', theme: 'orange', points: 50 },
    { label: 'Calm', theme: 'green', points: 50 },
    { label: 'Okay', theme: 'gray', points: 50 },
    { label: 'Numb', theme: 'gray', points: 50 },
    { label: 'Angry', theme: 'red', points: 50 },
    { label: 'Anxious', theme: 'purple', points: 50 },
    { label: 'Sad', theme: 'blue', points: 50 },
    { label: 'Depressed', theme: 'blue', points: 50 },
  ],
  [
    { label: 'Confident', theme: 'orange', points: 50 },
    { label: 'Proud', theme: 'orange', points: 50 },
    { label: 'Grateful', theme: 'green', points: 50 },
    { label: 'Bored', theme: 'gray', points: 50 },
    { label: 'Overwhelmed', theme: 'red', points: 50 },
    { label: 'Stressed', theme: 'red', points: 50 },
    { label: 'Afraid', theme: 'purple', points: 50 },
    { label: 'Guilty', theme: 'blue', points: 50 },
  ],
];

const LEVELS = [
  { label: 'Slightly', min: 0, max: 19 },
  { label: 'A little', min: 20, max: 39 },
  { label: 'Fairly', min: 40, max: 59 },
  { label: 'Very', min: 60, max: 79 },
  { label: 'Extremely', min: 80, max: 100 },
];

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

const attachments = [
  {
    type: 'product',
    name: 'iPhone',
    url: 'https://goo.gl/ppFmcR',
    image: 'https://goo.gl/J2gQpi',
  },
];

channel.sendMessage({
  text:
    'Your selected product is out of stock, would you like to select one of these alternatives?',
  attachments: attachments,
});

function ChatRoom() {
  const [showMoodPanel, setShowMoodPanel] = useState(false);
  const [currentMood, setCurrentMood] = useState(null);
  const [showPointPanel, setShowPointPanel] = useState(false);

  return (
    <div style={{ postition: 'relative' }}>
      <Chat client={chatClient} theme={'messaging'}>
        <Channel channel={channel} Attachment={MyAttachmentComponent}>
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
          // channel.sendMessage({
          //   text:
          //     'Your selected product is out of stock, would you like to select one of these alternatives?',
          // });
        }}
      >
        Press me
      </Button>

      {showMoodPanel && (
        <div className="selectMood">
          {MOODS.map((x, index) => (
            <div className="moodColumn" key={index}>
              {x.map((item) => (
                <div
                  onClick={() => {}}
                  style={{
                    background: item.theme,
                    color: '#fff',
                    width: 100,
                    height: 40,
                    lineHeight: '40px',
                    borderRadius: 20,
                  }}
                  onClick={() => {
                    setCurrentMood({ ...item });
                    setShowMoodPanel(false);
                    setShowPointPanel(true);
                  }}
                  key={item.label}
                >
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {showPointPanel && (
        <div className="pointPanel">
          <div className="levelsWrapper">
            {LEVELS.map((x) => (
              <div key={x.label}>{x.label}</div>
            ))}
          </div>
          <div>
            <Slider
              vertical
              defaultValue={currentMood.points}
              onChange={(value) => {
                currentMood.points = value;
                setCurrentMood({ ...currentMood });
              }}
            />
          </div>
          <div style={{ fontSize: 20, fontWeight: 'bold' }}>{`${currentMood.points}%`}</div>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
