import './App.css';
import styled, { ThemeProvider } from "styled-components";
import viaTheme from "es-components-via-theme";
import BackButton from './components/BackButton';
import PlanHeader from './components/PlanHeader';
import plans from './plan-data.json';
import { Button } from 'es-components';
import { useState } from 'react';

const PlanHeaderNav = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr;
  align-items: center;
  direction: rtl;

  /* Targeting the PlanHeader components */
  > section:nth-child(1) {
    border-left: 1px solid gray;
    visibility: visible;
  }
  > section:nth-child(2) {
    visibility: visible;
  }
  
  > section:nth-child(n+3) {
    display: none;
  }

    @media (min-width: ${props => props.theme.screenSize.tablet}) {
      grid-template-columns: repeat(3, 1fr);

      > section:nth-child(3) {
        border-right: 1px solid gray;
        display: grid;
      }
    }

    @media (min-width: ${props => props.theme.screenSize.widescreen}) {
      grid-template-columns: repeat(4, 1fr);

      > section:nth-child(4) {
        border-right: 1px solid gray;
        display: grid;
      }
    }
`;

function App() {
  const [planList, setPlanList] = useState(new Set(plans));

  const removePlan = () => {
    const plansArray = [...planList];
    plansArray.pop(); // Remove the last item
        setPlanList(new Set(plansArray));
};

// Function to add a new item to the set
const addPlan = () => {
  const newPlan = {
      planName: generateRandomPlanName(),
      premium: generateRandomPremium(),
      logo: "https://atqaeastsqldiags.blob.core.windows.net/images/403/3/MM_Logo_H(RGB_PMS7716_BLACK)+(45+px+h).8129a75281114253a37647015dd70811.png"
  };
  setPlanList(new Set([...planList, newPlan]));
};

  return (
    <div style={{padding:10}}>
    <ThemeProvider theme={viaTheme}>
        <header className="App-header">
          <BackButton></BackButton>
        </header>
        <body>
          <PlanHeaderNav>
          {[...planList].map((plan, index) => (
                <PlanHeader key={index} PlanName={plan.planName} Premium={plan.premium} logoUrl={plan.logo}>
                </PlanHeader>
            ))}
          </PlanHeaderNav>
          <div style={{marginTop: '2rem', display:'flex', justifyContent:'space-between'}}>
          <Button onClick={addPlan}>Add Plan</Button>
          <Button onClick={removePlan}>Remove Plan</Button>
          </div>
          <b style={{marginTop: '0.5rem', display:'flex'}}>Current plans: {planList.size}</b>
        </body>
    </ThemeProvider>
    </div>
  );
}

function generateRandomPlanName() {
  const adjectives = ['Comprehensive', 'Advanced', 'Ultimate', 'Premium', 'Exclusive', 'Innovative'];
  const nouns = ['Health', 'Care', 'Wellness', 'Life', 'Savings', 'Security'];
  const phrases = ['for a Better Tomorrow', 'for All Your Needs', 'You Can Trust', 'for the Modern World', 'for Your Peace of Mind'];

  const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // Random number between 1000 and 9999

  const name = `${getRandomElement(adjectives)} ${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(nouns)} ${randomNumber} ${getRandomElement(phrases)}`;

  return name;
}

function generateRandomPremium() {
  const premium = (Math.random() * 900 + 100).toFixed(2); // Random number between 100.00 and 999.99
  return premium;
}

export default App;
