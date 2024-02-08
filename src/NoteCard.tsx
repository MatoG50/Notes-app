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

  // Random background color
  const generateColor = () => {
    const CHHAPOLA = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${CHHAPOLA}`;
  };

  return (
    <>
      {notes.map(note => (
        <Card
          className='card'
          key={note.id}
          style={{ backgroundColor: generateColor() }}
        >
          <CardHeader>
            <Text className='txt'>{note.description}</Text>
          </CardHeader>
          <CardFooter>
            <Text className='txt'>{currentDate.toLocaleString()}</Text>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default NoteCard;
