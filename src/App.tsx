import { Text } from '@chakra-ui/react';
import './App.css';
import MyModal from './MyModal';
import { useState } from 'react';
import NoteCard from './NoteCard';
import { AiFillPlusCircle } from 'react-icons/ai';

interface Note {
  id: number;
  description: string;
  date: string;
  backgroundColor: string;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const [notes, setNotes] = useState<Note[]>([]);

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
        <AiFillPlusCircle onClick={onOpen} size={25} cursor='pointer' />

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
