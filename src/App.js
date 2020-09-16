import React from 'react';
import Provider from './Provider';
import './App.css';
import ChatRoom from './ChatRoom';

function App() {
  return (
    <div className="App">
      <Provider>
        <ChatRoom />
      </Provider>
    </div>
  );
}

export default App;
