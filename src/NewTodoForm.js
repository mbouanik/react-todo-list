import React, { useState } from "react";

const NewTodoForm = ({ addItem }) => {
  const INITIAL_STATE = {
    item: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"> New Item</label>
      <input
        name="item"
        placeholder="new Item"
        onChange={handleChange}
        value={formData.item}
        data-testid="item"
      />
      <button>add Item</button>
    </form>
  );
};

export default NewTodoForm;
