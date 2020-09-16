export const CATEGORIES = [
  { label: 'Work', icon: '' },
  { label: 'School', icon: '' },
  { label: 'Outdoors', icon: '' },
  { label: 'Home', icon: '' },
  { label: 'Being by myself', icon: '' },
  { label: 'Partner', icon: '' },
  { label: 'Family', icon: '' },
  { label: 'Friends', icon: '' },
  { label: 'Socializing', icon: '' },
  { label: 'Social Media', icon: '' },
  { label: 'Music', icon: '' },
  { label: 'Meditation', icon: '' },
  { label: 'Good Sleep', icon: '' },
  { label: 'Bad Sleep', icon: '' },
  { label: 'Sedentary', icon: '' },
  { label: 'Exercise', icon: '' },
  { label: 'Body', icon: '' },
  { label: 'Sex', icon: '' },
  { label: 'Health', icon: '' },
  { label: 'Food', icon: '' },
  { label: 'Money', icon: '' },
  { label: 'Weather', icon: '' },
  { label: 'Cleaning', icon: '' },
  { label: 'Add', icon: '' },
];

export const LEVELS = [
  { label: 'Slightly', min: 0, max: 19 },
  { label: 'A little', min: 20, max: 39 },
  { label: 'Fairly', min: 40, max: 59 },
  { label: 'Very', min: 60, max: 79 },
  { label: 'Extremely', min: 80, max: 100 },
];

export const HASH = [
  ...LEVELS.reverse().reduce((acc, x) => [...acc, ...Array(20).fill(x.label)], []),
  'Extremely',
];

export const MOODS = [
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
