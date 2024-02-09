import { Text } from '@chakra-ui/react';
import './App.css';
import MyModal from './MyModal';
import { useState } from 'react';
import NoteCard from './NoteCard';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const [notes, setNotes] = useState([
    {
      id: 1,
      description: 'This is my default note',
      date: '2/8/2024, 11:28:29 PM',
      backgroundColor: getRandomColor(),
    },
    {
      id: 2,
      description: 'This is a test note',
      date: '2/8/2024, 11:28:29 PM',
      backgroundColor: getRandomColor(),
    },
  ]);

  // Background color Generator
  function getRandomColor() {
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
    return color;
  }

  const date = () => {
    return new Date().toLocaleString();
  };

  return (
    <>
      <div className='container'>
        <Text fontSize='4xl' fontWeight='bold'>
          Notes
        </Text>
        <div className='circle' onClick={onOpen}>
          <p className='plus'>+</p>
        </div>

        {/* <img src='./src/assets/add_icon.svg' alt='image' onClick={onOpen} /> */}
      </div>
      <div className='cards'>
        <NoteCard notes={notes} />
      </div>
      <MyModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={note =>
          setNotes([
            ...notes,
            {
              ...note,
              id: notes.length + 1,
              date: date(),
              backgroundColor: getRandomColor(),
            },
          ])
        }
      />
    </>
  );
}

export default App;
