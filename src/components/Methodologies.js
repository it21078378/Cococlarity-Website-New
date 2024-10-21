import React from 'react';
import './Methodologies.css'; // Custom CSS for styling

const Methodologies = () => {
  const methodologies = [
    {
      title: 'Supply and Demand Predictive Model',
      description: `This methodology involves building a comprehensive predictive model for forecasting coconut oil export volumes. The process includes data collection from sources like historical export data, economic indicators, and environmental factors. Data preprocessing is performed to clean and prepare the data, including feature engineering. Logistic regression is used for price forecasting, and random forest regression is employed for predicting optimal export volumes. The model is evaluated using metrics like MAE, MSE, and R-squared, and optimized through cross-validation and hyperparameter tuning. The model is deployed on a web-based platform for stakeholders, with explanatory AI tools like SHAP integrated for insight.`,
    },
    {
      title: 'Copra Quality Predictive Model',
      description: `The copra quality predictive model uses a Convolutional Neural Network (CNN) to classify copra quality into good, medium, and poor categories. Data collection involved gathering and preprocessing images of copra from various stages and quality levels. The CNN model includes layers for input, convolutional, pooling, ReLU, and softmax to analyze image features. The model was trained and deployed through the CocoClarity Mobile App, allowing real-time quality assessment via smartphone, providing instant feedback to coconut oil producers.`,
    },
    {
      title: 'Oil Product Estimator',
      description: `This research project aims to optimize coconut oil production using modern AI methods. Data is collected from historical and current sources, considering factors like environmental conditions and market demand. The methodology focuses on developing two predictive models: a random forest model for predicting coconut input and a decision tree model for forecasting oil yield from kurutu (a co-product). These models are used to create a yield tracking system and optimize the production process. Data visualization tools like line and bar charts are used for better analysis and understanding of the results.`,
    },
    {
      title: 'Coconut Oil Quality Predictive Model',
      description: `A convolutional neural network (CNN) was developed to predict coconut oil quality based on visual features, combined with a decision tree classifier for quantitative parameters like moisture content, free fatty acid levels, and peroxide value. The model was trained on a dataset of coconut oil images with labeled quality metrics, collected in collaboration with research institutes and producers. This hybrid approach, utilizing both CNN and decision trees, significantly improved the accuracy of quality predictions and provides an effective tool for industrial quality control in coconut oil production.`,
    },
  ];

  return (
    <div className="methodologies-container">
      {methodologies.map((methodology, index) => (
        <div key={index} className="methodology-card">
          <h3>{methodology.title}</h3>
          <p>{methodology.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Methodologies;
