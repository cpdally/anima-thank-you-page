import React, { useState } from 'react';
import { createPDF } from '../utils/CreatePDF';

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClick = async () => {
    await createPDF(firstName, lastName);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <button type="button" onClick={handleClick}>Submit</button>
    </form>
  );
};

export default Form;
