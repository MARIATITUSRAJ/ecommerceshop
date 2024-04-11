import React,{useState} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CardGrid from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const [cartValue, setCartValue] = useState(0);
  return (
    <>
    <Navbar cartValue={cartValue} />
    <Header />
    <section>
      <div className="container">
        <div className="row">
          <CardGrid setCartValue={setCartValue}></CardGrid>
        </div>
      </div>
    <Footer />
    </section>
  </>
);
}



export default App;