import { Text } from '@chakra-ui/react';
import './App.css';
import MyModal from './MyModal';
import { useState } from 'react';
import NoteCard from './NoteCard';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const [notes, setNotes] = useState([
    { id: 1, description: 'This is my default note' },
  ]);

  return (
    <>
      <div className='container'>
        <Text fontSize='4xl' fontWeight='bold'>
          Notes
        </Text>
        <img src='./src/assets/add_icon.svg' alt='image' onClick={onOpen} />
      </div>
      <div className='cards'>
        <NoteCard notes={notes} />
      </div>
      <MyModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={note =>
          setNotes([...notes, { ...note, id: notes.length + 1 }])
        }
      />
    </>
  );
}

export default App;
