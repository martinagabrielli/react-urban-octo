import './App.css';
import NavBar from './components/Navbar';
import Counters from './components/Counters';
import Counter from './components/Counter';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </Fragment>
  );
}

export default App;
