import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Challenge_List/challenge.css";

const ChallengeList = () => {
  const [challengeData, setChallengeData] = useState(JSON.parse(localStorage.getItem("employee_data")) || []);

  const handleUpvote = (id) => {
    const challengeIndex = challengeData.findIndex(e => e.id === id);
    if (challengeIndex !== -1) {
      const updatedChallengeData = [...challengeData];
      updatedChallengeData[challengeIndex].upvote += 1;
      setChallengeData(updatedChallengeData);
      localStorage.setItem("employee_data", JSON.stringify(updatedChallengeData));
    }
  };

  const handleSortByDate = () => {
    const sortedData = [...challengeData].sort((a, b) => b.date - a.date);
    setChallengeData(sortedData);
  };

  const handleSortByUpvote = () => {
    const sortedData = [...challengeData].sort((a, b) => b.upvote - a.upvote);
    setChallengeData(sortedData);
    console.log(sortedData)
  };

  return (
    <div className='Main_div'>
      <Link to="/employee_page" className="back-btn">Back to Home</Link>
      <div className="sort-buttons">
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByUpvote}>Sort by Upvote</button>
      </div>
      {challengeData.map((e) => (
        <div key={e.id} className='challenge'>
          <h2 style={{ color: 'white' }}><b>{e.title}</b></h2>
          <hr />
          <p><span className='description'>Description</span> - {e.description}</p>
          <b className='tag'><b>Tags</b> - {e.tags}</b>
          <hr />
          <button onClick={() => handleUpvote(e.id)} className='btn'>Upvote</button>
          <span>Upvotes: {e.upvote}</span>
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;
