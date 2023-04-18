import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label
          className={`form-check-label rounded-circle ${
            checked ? 'bg-white' : ''
          }`}
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '1px solid #fff',
          }}
        ></label>
      </div>
    </div>
  );
};

export default MyCheckbox;

