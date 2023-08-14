import Aside from './components/aside/Aside.component';
import CardsContainer from './components/card/CardsContainer.component';

function App() {
  return (
    <div className="App">
      <main>
        <CardsContainer />
        <Aside />
      </main>
    </div>
  );
}

export default App;
