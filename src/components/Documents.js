import React from 'react';
import './Documents.css'; // Create this CSS file for styling

const documents = [
  { title: 'Project Proposal', type: 'Group', downloadLink: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EtENBwV4RalLuAJIL98q-j0B_OY1HN6KVHmTeUDpPOGOGg?e=WlRCDD' },
  { title: 'Status Document 1', type: 'Individual', downloadLink: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EpOUjFEwzPBFr8KKEWIwefkBlORkfldgQuttYKg8jmZ0cw?e=22UPGs' },
  { title: 'Status Documents II', type: 'Individual', downloadLink: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/ErBIPS5k-cNMruNgCiXE5koBXU8lyhLxsMOJGATWAeMTbA?e=dNkoh0' },
  { title: 'Research Paper', type: 'Group', downloadLink: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EvSZi5VrVgNCsQ9uY2XUV4gBg9CuiaWmr4ufOaYERetAwA?e=ErKm7T' },
  { title: 'Research Paper', type: 'Group', downloadLink: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EvSZi5VrVgNCsQ9uY2XUV4gBg9CuiaWmr4ufOaYERetAwA?e=LrQogZ' },
  { title: 'Final Report', type: 'Group', downloadLink: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EnLz-l-EB9lMj7GYoYfrvqwB7kLL6q2a8CrOOQypTITflQ?e=onkzCu' },
  { title: 'Poster', type: 'Group', downloadLink: 'https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EeJ7ilLGuMxAiGLgytgROLwBVi9c3GNW2jzab_UvgJN5ZA?e=1moDwi' },
];

const Documents = () => {
  return (
    <div className="documents-container">
      <h3>Downloads</h3>
      <h2>Documents</h2>
      <p>Please find all documents related to this project below.</p>
      <div className="documents-grid">
        {documents.map((doc, index) => (
          <div key={index} className="document-card">
            <div className="document-header">
              <i className="fas fa-file-pdf"></i>
              <h4>{doc.title}</h4>
            </div>
            <div className="document-footer">
              <span>{doc.type}</span>
              <a href={doc.downloadLink}>Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
