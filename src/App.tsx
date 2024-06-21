import './App.css'
import { Collapse } from './components/Collapse';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Collapse collapsedLabel="Показать" expandedLabel="Скрыть" />
      </div>
    </div>
  );
}

export default App
