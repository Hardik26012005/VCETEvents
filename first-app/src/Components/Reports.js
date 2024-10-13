import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reports.css';
import { FaUser, FaTrophy, FaMoneyBillWave } from 'react-icons/fa'; // Import icons

const Reports = () => {
  const [reports, setReports] = useState([]);

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

  return (
    <div className="reports-container">
      <div className="reports-grid">
        {reports.length > 0 ? (
          reports.map(report => (
            <div key={report._id} className="report-card">
              <div className='eventt'>
              <h3>Event ID: {report.eventId}</h3>
              </div>
              <div className="report-details">
                <p><FaUser /> <strong>Attendees:</strong> {report.attendees}</p> {/* Icon for Attendees */}
                <p><FaTrophy /> <strong>Winners:</strong> {report.winners}</p>  {/* Icon for Winners */}
                <p><FaMoneyBillWave /> <strong>Prize Money:</strong> ${report.prizeMoney}</p> {/* Icon for Prize Money */}
              </div>
            </div>
          ))
        ) : (
          <p>No reports available</p>
        )}
      </div>
    </div>
  );
};

export default Reports;
