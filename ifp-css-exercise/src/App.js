import './App.css';
import styled, { ThemeProvider } from "styled-components";
import viaTheme from "es-components-via-theme";
import BackButton from './components/BackButton';
import PlanHeader from './components/PlanHeader';
import plans from './plan-data.json';

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
    visibility: collapse;
  }

    @media (min-width: ${props => props.theme.screenSize.tablet}) {
      grid-template-columns: repeat(3, 1fr);

      > section:nth-child(3) {
        border-right: 1px solid gray;
        visibility: visible;
      }
    }

    @media (min-width: ${props => props.theme.screenSize.widescreen}) {
      grid-template-columns: repeat(4, 1fr);

      > section:nth-child(4) {
        border-right: 1px solid gray;
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
