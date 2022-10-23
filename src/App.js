import { useContext } from 'react';
import './App.css';
import Header from './Components/Header';
import { PageContext } from './Contexts/PageContext';

function App() {
  const { background } = useContext(PageContext);

  return (
      <div style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
        <Header />
      </div>
  );
}

export default App;
