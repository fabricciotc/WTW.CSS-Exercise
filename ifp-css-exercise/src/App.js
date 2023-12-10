import './App.css';
import styled, { ThemeProvider } from "styled-components";
import viaTheme from "es-components-via-theme";
import BackButton from './components/BackButton';
import PlanHeader from './components/PlanHeader';
import plans from './plan-data.json';

const PlanHeaderNav = styled.section`
  display: grid;
  height: auto;

  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: 
    "plan1 plan2";

  /* Targeting the PlanHeader components */
  > section:nth-child(1) {
    grid-area: plan1;
    border-right: 1px solid gray;
  }
  > section:nth-child(2) {
    grid-area: plan2;
  }
  
  > section:nth-child(3) {
    visibility: collapse;
  }

    @media (min-width: ${props => props.theme.screenSize.tablet}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;

      grid-template-areas: 
      ". plan1 plan2 plan3";

      > section:nth-child(1) {
        border-left: 1px solid gray;
      }
      > section:nth-child(2) {
        border-right: 1px solid gray;
      }
      > section:nth-child(3) {
        grid-area: plan3;
        visibility: visible;
      }
    }
`;

function App() {

  return (
    <div style={{padding:10}}>
    <ThemeProvider theme={viaTheme}>
        <header className="App-header">
          <BackButton></BackButton>
        </header>
        <body>
          <PlanHeaderNav>
          {plans.map((plan, index) => (
                <PlanHeader key={index} PlanName={plan.planName} Premium={plan.premium} logoUrl={plan.logo}>
                </PlanHeader>
            ))}
          </PlanHeaderNav>
        </body>
    </ThemeProvider>
    </div>
  );
}

export default App;
