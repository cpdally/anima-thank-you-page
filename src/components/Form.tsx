import React, { useState } from 'react';
import { createPDF } from '../utils/CreatePDF';

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPDF(firstName, lastName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src="/AnimaLogo.svg" alt="Anima International Logo" />
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
