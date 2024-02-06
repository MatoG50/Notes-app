import { Text } from '@chakra-ui/react';
import './App.css';
import MyModal from './MyModal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <div className='container'>
        <Text fontSize='4xl' fontWeight='bold'>
          Notes
        </Text>
        <img src='./src/assets/add_icon.svg' alt='image' onClick={onOpen} />
      </div>
      <MyModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
