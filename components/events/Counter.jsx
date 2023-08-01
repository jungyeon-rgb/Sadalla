import React from 'react';
export default function Counter({ value = 1 }) {
  const [count, setCount] = React.useState(value);

  const handleIncreaseClick = () => {
    setCount(count + 1);
  };
  const handleDecreaseClick = () => {
    if (count - 1 > 0) setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleIncreaseClick}>+</button>
      {count}
      <button onClick={handleDecreaseClick}>-</button>
    </>
  );
}
