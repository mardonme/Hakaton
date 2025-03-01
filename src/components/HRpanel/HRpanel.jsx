import React, { useState } from 'react';
import './HRPanel.scss';

const HRPanel = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Ali Valiyev', position: 'Frontend Developer', status: 'Baholashda' },
    { id: 2, name: 'Zarina Qodirova', position: 'Backend Developer', status: 'Intervyu' },
  ]);

  return (
    <div className="hr-panel">
      <h2>Nomzodlar ro'yxati</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <strong>{candidate.name}</strong> - {candidate.position} ({candidate.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HRPanel;