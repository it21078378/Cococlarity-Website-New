import React from 'react';
import './ResearchProblem.css'; // Add your custom styles here

const ResearchProblem = () => {
  return (
    <div className="research-container">
      <div className="research-box">
        <div className="research-content">
          <div className="research-icon">
            <span className="icon-star">⭐</span>
          </div>
          <div className="research-details">
            <h2>Research Problem</h2>
            <p>How to apply fast-changing AI/ML to increase sustainability and efficiency in the coconut oil industry?</p>
            <ul>
              <li>Support coconut oil manufacturers to choose which oil type to be manufactured?</li>
              <li>How much of coconut oil will be required in the future through past insights?</li>
              <li>Provide fast coconut oil quality predicting system through smartphone with high accuracy lab test?</li>
              <li>Provide marketing features such as finding out which countries to export to and what percentage?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchProblem;
