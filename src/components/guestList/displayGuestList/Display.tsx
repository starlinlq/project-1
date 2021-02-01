interface Guest {
  guests: { name: string }[];
}

const Display: React.FC<Guest> = ({ guests }) => {
  return (
    <>
      {guests.map((guest) => (
        <li key={guest.name}>{guest.name}</li>
      ))}
    </>
  );
};

export default Display;
