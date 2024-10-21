import React from 'react';
import './Timeline.css'; // Create this CSS file for styling

const milestones = [
  {
    date: 'March 2021',
    title: 'Project Proposal',
    description:
      'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
    marks: 6,
  },
  {
    date: 'June 2021',
    title: 'Progress Presentation I',
    description:
      'Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.',
    marks: 6,
  },
  {
    date: 'September 2021',
    title: 'Final Report',
    description:
      'The Final Report summarizes the entire project, including the results, lessons learned, and recommendations for future work.',
    marks: 8,
  },
  {
    date: 'December 2021',
    title: 'Project Defense',
    description:
      'The Project Defense involves presenting your final project to the panel of judges for evaluation and feedback.',
    marks: 10,
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container d-flex flex-column justify-content-center align-items-center">
      <h3>Milestones</h3>
      <h2>Timeline in Brief</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-content">
              <span className="date">{milestone.date}</span>
              <h4>{milestone.title}</h4>
              <p>{milestone.description}</p>
              <div className="marks">
                <span>Marks Allocated: {milestone.marks}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${milestone.marks * 10}%` }}
                  >
                    {milestone.marks}%
                  </div>
                </div>
              </div>
              <span className="circle" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
