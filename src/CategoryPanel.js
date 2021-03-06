import React, { useState, useContext } from 'react';
import { Button } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { CATEGORIES, HASH } from './constants';
import Context from './Context';

export default function CategoryPanel(props) {
  const { channel, setShowCategoryPanel } = props;
  const [currentCategory, setCurrentCategory] = useState('');
  const { currentMood } = useContext(Context);

  return (
    <div className="pointPanelWrapper" style={{ display: 'flex', zIndex: 1000 }}>
      <div
        style={{ alignSelf: 'flex-end', margin: 20 }}
        onClick={async () => {
          await setShowCategoryPanel(false);
          channel.sendMessage({
            text: `I'm feeling ${HASH[currentMood.points]} ${currentMood.label}`,
          });
          setCurrentCategory('');
        }}
      >
        Skip
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {CATEGORIES.map((item) => (
          <div
            onClick={() => {
              setCurrentCategory(item.label);
            }}
            key={item.label}
            style={{ margin: 12, width: 60 }}
          >
            <SmileTwoTone twoToneColor={currentCategory === item.label ? '#eb2f96' : '#52c41a'} />
            <div>{item.label}</div>
          </div>
        ))}
      </div>

      <Button
        type="primary"
        ghost
        onClick={async () => {
          setShowCategoryPanel(false);
          await channel.sendMessage({
            text: `I'm feeling ${HASH[currentMood.points]} ${currentMood.label}`,
          });

          currentCategory !== '' &&
            (await channel.sendMessage({
              text: `The factor linked to my happiness is: ${currentCategory}`,
            }));
          setCurrentCategory('');
        }}
        style={{ width: 300, borderRadius: 20, margin: '20px auto' }}
      >
        Capture
      </Button>
    </div>
  );
}
