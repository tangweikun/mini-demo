import React, { useState } from 'react';
import GlobalContext from './Context';

export default function GlobalProvider(props) {
  const [currentMood, setCurrentMood] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        currentMood,
        setCurrentMood,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
