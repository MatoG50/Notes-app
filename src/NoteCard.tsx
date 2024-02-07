import { Card, CardFooter, CardHeader, Text } from '@chakra-ui/react';

interface Note {
  id: number;
  description: string;
}

interface Props {
  notes: Note[];
}
const NoteCard = ({ notes }: Props) => {
  const currentDate = new Date('2024-02-05');

  return (
    <>
      {notes.map(note => (
        <Card className='card' key={note.id}>
          <CardHeader>
            <Text>{note.description}</Text>
          </CardHeader>
          <CardFooter>
            <Text>{currentDate.toLocaleString()}</Text>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default NoteCard;
