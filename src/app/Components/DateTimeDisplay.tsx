import React, { useState, useEffect } from 'react';

const DateTimeDisplay: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date().toLocaleString();
      setDateTime(currentDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="text-white">{dateTime}</div>;
};

export default DateTimeDisplay;