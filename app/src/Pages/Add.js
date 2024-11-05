import React, { useState } from 'react';
import '../Styles/Add.css';

function Add() {
  const [formData, setFormData] = useState({
    themeName: '',
    coordinator: '',
    description: '',
    maxStudents: '',
    specializations: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="add-page">
      <div className="form-container">
        <h2>Add Thesis</h2>
        <form onSubmit={handleSubmit}>
          <label>Theme Name:</label>
          <input type="text" name="themeName" value={formData.themeName} onChange={handleChange} required />

          <label>Coordinator:</label>
          <input type="text" name="coordinator" value={formData.coordinator} onChange={handleChange} required />

          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />

          <label>Max Students:</label>
          <input type="number" name="maxStudents" value={formData.maxStudents} onChange={handleChange} required />

          <label>Specializations:</label>
          <input type="text" name="specializations" value={formData.specializations} onChange={handleChange}/>

          <label>Requirements:</label>
          <textarea name="requirements" value={formData.requirements} onChange={handleChange}/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
