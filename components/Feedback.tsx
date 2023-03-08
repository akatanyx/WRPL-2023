import React, { useState } from 'react';

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Open popup</button>
      <Popup isOpen={isOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Feedback;