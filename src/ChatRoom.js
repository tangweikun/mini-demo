import React from 'react';
import { Button } from 'antd';
import { Chat, Channel, Attachment } from 'stream-chat-react';
import { ChannelHeader, MessageList, Window } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

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

const ChatRoom = () => (
  <div>
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
      onClick={() => {
        channel.sendMessage({
          text:
            'Your selected product is out of stock, would you like to select one of these alternatives?',
        });
      }}
    >
      Press me
    </Button>
  </div>
);

export default ChatRoom;
