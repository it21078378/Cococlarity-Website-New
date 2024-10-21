import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import LitreatureSurvey from './components/LitreatureSurvey';
import Navbar from './components/Navbar';
import ProcessChain from './components/ProcessChain';
import researchData from './data/researchData';
import ResearchProblem from './components/ResearchProblem';
import Methodologies from './components/Methodologies';
import TechnologiesUsed from './components/TechnologiesUsed';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Documents from './components/Documents';
import Litreature from './components/Litreature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div id="literature-survey">
        <Layout
          left={<Litreature />}
          right={researchData.litreatureSurvey.right}
        />
      </div>

      <ProcessChain />

      <div id="research-problem">
        <Layout left={<ResearchProblem />} />
      </div>

      <div id="methodology">
        <Methodologies />
      </div>

      <div id="technologies-used">
        <TechnologiesUsed />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="contact-form">
        <ContactForm />
      </div>

      <Documents />
    </div>
  );
}

export default App;
