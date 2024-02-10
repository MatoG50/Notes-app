import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  description: z
    .string()
    .trim()
    .min(10, { message: 'Note should be atleast 10 characters' })
    .max(70),
});

type MyModalData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSubmit: (data: MyModalData) => void;
  isOpen: boolean;
}

const MyModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<MyModalData>({
    resolver: zodResolver(schema),
  });
  // Function to handle modal close
  const handleCloseModal = () => {
    onClose(); // Close the modal
    reset(); // Reset the form
  };

  // Modal Resize
  const [modalSize, setModalSize] = React.useState('md');

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 600) {
        setModalSize('lg');
      } else {
        setModalSize('xs');
      }
    }

    handleResize(); // Initial call to set modal size
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal} size={modalSize}>
        <ModalOverlay />
        <ModalContent className='responsive-modal'>
          <ModalBody>
            <form
              onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
                onClose();
              })}
            >
              <textarea className='description' {...register('description')} />
              {errors && (
                <p className='danger'>{errors.description?.message}</p>
              )}
              <Button
                colorScheme='purple'
                disabled={!isValid}
                className={!isValid ? 'disabled' : 'add-btn'}
                // onClick={onClose}
                type='submit'
              >
                Add note
              </Button>
              <Button
                className='close-btn'
                colorScheme='red'
                onClick={() => {
                  onClose();
                  reset();
                }}
              >
                Close
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
