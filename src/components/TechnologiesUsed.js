import React from 'react';
import './Technologies.css'; // Add your custom CSS here
import python from '../assets/python.png';
import reactnative from '../assets/reactnative.png';
import tensorflow from '../assets/tensorflow.jpg';
import computervision from '../assets/computervision.jpg';
import mongodb from '../assets/mongodb.png';
import github from '../assets/github.png';
import nodejs from '../assets/nodejs.png';
import ml from '../assets/ml.jpg';



const technologies = [
    { name: 'Python', logo: python },
    { name: 'React Native', logo: reactnative },
    { name: 'Tensorflow', logo: tensorflow },
    { name: 'Computer Vision', logo: computervision },
    { name: 'MongoDB', logo: mongodb },
    { name: 'Github', logo: github },
    { name: 'NodeJS', logo: nodejs },
    { name: 'ML', logo: ml }
];

const TechnologiesUsed = () => {
    return (
        <div className="tech-container">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img src={tech.logo} alt={tech.name} className="tech-logo" />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesUsed;
