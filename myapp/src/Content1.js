import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content1 = ({ items, handleChange, handleDelete }) => {
  if (!Array.isArray(items)) {
    // Handle the case where items is not an array (e.g., it might be undefined or null)
    return null; // You can return something else or an error message here
  }

  return (
    <main>
      <ul>
        {items.map((i) => (
          <li className="item" key={i.id}>
            <input onChange={() => handleChange(i.id)} type="checkbox" checked={i.checked} />
            <label style={i.checked ? { textDecoration: 'line-through' } : null}>{i.item}</label>
            <button onClick={() => handleDelete(i.id)}>
              <FaTrashAlt role="button" tabIndex="0" />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export { Content1 }; // Export as a named export
