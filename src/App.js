import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PassengerDisplayList from './components/passenger-display-list/PassengerDisplayList';

function App() {
  return (
    <div className="App">
      <Header />
      <PassengerDisplayList />
      <Footer />
    </div>
  );
}

export default App;
