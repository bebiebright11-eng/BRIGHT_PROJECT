import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

function LogForm() {
  const { placementId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    week_number: '',
    tasks_performed: '',
    challenges: '',
    attendance_days: 5
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('placements/logs/', {
        ...formData,
        placement: placementId
      });
      alert("Weekly Log Submitted Successfully!");
      navigate('/dashboard');
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Submit Weekly Log</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="number" placeholder="Week Number" required 
          onChange={(e) => setFormData({...formData, week_number: e.target.value})} />
        <textarea placeholder="Tasks" required 
          onChange={(e) => setFormData({...formData, tasks_performed: e.target.value})} />
        <button type="submit">Submit Log</button>
      </form>
    </div>
  );
}

export default LogForm;
