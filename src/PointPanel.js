import React, { useContext } from 'react';
import { Button, Slider } from 'antd';
import { HASH, LEVELS } from './constants';
import Context from './Context';

export default function PointPanel(props) {
  const { setShowMoodPanel, setShowPointPanel, setShowCategoryPanel } = props;
  const { setCurrentMood, currentMood } = useContext(Context);

  return (
    <div className="pointPanelWrapper" style={{ display: 'flex', zIndex: 1000 }}>
      <div
        style={{ alignSelf: 'flex-start', margin: 20 }}
        onClick={() => {
          setShowPointPanel(false);
          setShowMoodPanel(true);
          setCurrentMood(null);
        }}
      >
        Back
      </div>
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

      <Button
        type="primary"
        ghost
        onClick={() => {
          setShowPointPanel(false);
          setShowCategoryPanel(true);
        }}
        style={{ width: 300, borderRadius: 20, margin: '20px auto' }}
      >
        {`I'm feeling ${HASH[currentMood.points]} ${currentMood.label}`}
      </Button>
    </div>
  );
}
