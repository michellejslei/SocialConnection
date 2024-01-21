import React, { useState } from 'react';

const ImageToByteArrayConverter = () => {
  const [byteArray, setByteArray] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const result = event.target.result;
        const byteArray = convertToByteArray(result);
        setByteArray(byteArray);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const convertToByteArray = (binaryString) => {
    const byteArray = new Uint8Array(binaryString);
    return Array.from(byteArray);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>Byte Array: {byteArray.join(', ')}</p>
    </div>
  );
};

export default ImageToByteArrayConverter;
