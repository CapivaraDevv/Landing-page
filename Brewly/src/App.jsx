import { useState } from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Hero/>
      <Products search={search} />
      <About/>
      <Footer/>
    </>
  )
}

export default App
