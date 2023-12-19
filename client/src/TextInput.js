// TextInput.js
import React from 'react';

const TextInput = (props) => (
  <input
    type="text"
    id={props.id}
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    required
    className="mt-3 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
);

export default TextInput;
