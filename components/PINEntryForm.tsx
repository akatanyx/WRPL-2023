import { useState } from 'react';
import bcrypt from "bcrypt";

interface PINEntryFormProps {
  onSubmit: (pin: string) => void;
}

const PINEntryForm = ({ onSubmit }: PINEntryFormProps) => {
  const [pin, setPIN] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(pin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        PIN:
        <input
          type="password"
          value={pin}
          onChange={(event) => setPIN(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PINEntryForm;
