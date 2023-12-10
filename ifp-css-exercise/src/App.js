import './App.css';
import { ThemeProvider } from "styled-components";
import viaTheme from "es-components-via-theme";
import BackButton from './components/BackButton';

function App() {
  return (
    <ThemeProvider theme={viaTheme}>
        <header className="App-header">
          <BackButton></BackButton>
        </header>
        <body>
          <div className='task-2'>
          <div></div>
          <div>Jose</div>
          <div>Jesus</div>
          <div>Maria</div>
          </div>
        </body>
    </ThemeProvider>
  );
}

export default App;
