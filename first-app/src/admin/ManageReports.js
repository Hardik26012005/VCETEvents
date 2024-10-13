import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageReports.css';

const ManageReports = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({ eventId: '', attendees: '', winners: '', prizeMoney: '' });

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reports');
      setReports(res.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reports', newReport);
      fetchReports(); // Fetch updated reports
      setNewReport({ eventId: '', attendees: '', winners: '', prizeMoney: '' });
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/reports/${id}`);
      fetchReports(); // Refresh the list
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  return (
    <div className="manage-reports">
      <h2>Manage Reports</h2>
      <form className="report-form" onSubmit={handleSubmit}>
        <input type="text" name="eventId" placeholder="Event ID" value={newReport.eventId} onChange={handleInputChange} required />
        <input type="text" name="attendees" placeholder="Attendees" value={newReport.attendees} onChange={handleInputChange} required />
        <input type="text" name="winners" placeholder="Winners" value={newReport.winners} onChange={handleInputChange} required />
        <input type="text" name="prizeMoney" placeholder="Prize Money" value={newReport.prizeMoney} onChange={handleInputChange} required />
        <button type="submit">Add Report</button>
      </form>

      <h3>Existing Reports</h3>
      <ul className="reports-list">
        {reports.length > 0 ? (
          reports.map(report => (
            <li key={report._id} className="report-item">
              <div>
                <strong>Event ID:</strong> {report.eventId}<br />
                <strong>Attendees:</strong> {report.attendees}<br />
                <strong>Winners:</strong> {report.winners}<br />
                <strong>Prize Money:</strong> {report.prizeMoney}
              </div>
              <button className="delete-report-button" onClick={() => handleDelete(report._id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No reports found</li>
        )}
      </ul>
    </div>
  );
};

export default ManageReports;
