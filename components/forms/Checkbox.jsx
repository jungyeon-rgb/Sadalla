// {name, label, value, onChange, checked}
import { useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    const { checked } = e.target;
    setChecked(checked);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="test"
          onChange={handleChange}
          checked={checked}
        />
      </label>
    </div>
  );
}
