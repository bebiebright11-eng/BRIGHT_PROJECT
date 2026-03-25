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
            // This sends the data to your WeeklyLog model via the API
            await API.post('placements/logs/', {
                ...formData,
                placement: placementId
            });
            alert("Log submitted successfully!");
            navigate('/dashboard');
        } catch (error) {
            console.error("Submission failed:", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Submit Weekly Log</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Week Number (e.g. 1)" 
                    onChange={(e) => setFormData({...formData, week_number: e.target.value})}
                    required 
                />
                <textarea 
                    placeholder="Tasks Performed" 
                    onChange={(e) => setFormData({...formData, tasks_performed: e.target.value})}
                    required 
                />
                <textarea 
                    placeholder="Challenges Faced" 
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                />
                <button type="submit" className="apply-button">Submit Log</button>
            </form>
        </div>
    );
}

export default LogForm;