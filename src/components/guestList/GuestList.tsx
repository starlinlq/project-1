import { useState } from "react";
import Display from "./displayGuestList/Display";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<{ name: string }[]>([]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  const addGuest = () => {
    setGuests([...guests, { name }]);
    setName("");
  };

  return (
    <>
      <h1>guest List</h1>
      <input onChange={onChange} value={name} />
      <button onClick={addGuest}>Add Guest</button>
      <Display guests={guests} />
    </>
  );
};

export default GuestList;
