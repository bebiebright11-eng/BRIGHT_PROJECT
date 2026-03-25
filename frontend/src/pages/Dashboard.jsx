import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Dashboard() {
  const navigate = useNavigate();
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await API.get('placements/');
        setPlacements(response.data);
      } catch (error) {
        console.error("Connection Error:", error);
      }
    };
    fetchPlacements();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>MUK Internship Portal</h1>
      <button onClick={() => navigate('/')}>Logout</button>
      <hr />

      {placements.length > 0 ? (
        placements.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '8px' }}>
            <h3>Internship Placement #{item.id}</h3>
            <p><strong>Status:</strong> {item.status}</p>
            <button 
              onClick={() => navigate(`/submit-log/${item.id}`)}
              style={{ backgroundColor: '#004a99', color: 'white', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
            >
              Submit Weekly Log
            </button>
          </div>
        ))
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>No active placements found in the system.</p>
          <p>Go to your Django Admin to add a Placement for your user!</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;