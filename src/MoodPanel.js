import React from 'react';
import { MOODS } from './constants';

export default function MoodPanel(props) {
  const { setCurrentMood, setShowMoodPanel, setShowPointPanel } = props;

  return (
    <div className="selectMood">
      {MOODS.map((x, index) => (
        <div className="moodColumn" key={index}>
          {x.map((item) => (
            <div
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
  );
}
