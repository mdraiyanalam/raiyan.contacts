import React, { useState } from 'react';
import Sharebutton from './img/sharebutton.png';

const CopyToClipboardButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Cleanup
    document.body.removeChild(textarea);

    // Set the copied state
    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div>
      <button onClick={handleCopyClick}>
        {isCopied ? 'URL Copied to Clipboard!' : <img className="rounded-circle" style={{ height: '35px', width: '35px' }} src={Sharebutton} alt="Share Button" />}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
