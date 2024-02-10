import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
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

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form
              onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
                onClose();
              })}
            >
              <textarea {...register('description')} className='description' />
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
