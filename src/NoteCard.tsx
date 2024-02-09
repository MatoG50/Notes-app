import { Card, CardBody, CardFooter, Text } from '@chakra-ui/react';

interface Note {
  id: number;
  description: string;
  date: string;
  backgroundColor: string;
}

interface Props {
  notes: Note[];
}

const NoteCard = ({ notes }: Props) => {
  // Random background color

  return (
    <>
      {notes.map(note => (
        <Card
          className='card'
          key={note.id}
          style={{ backgroundColor: note.backgroundColor }}
        >
          <CardBody>
            <Text className='txt'>{note.description}</Text>
          </CardBody>
          <CardFooter className='footer'>
            <Text className='txt'>{note.date}</Text>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default NoteCard;
