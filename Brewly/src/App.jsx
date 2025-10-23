import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Hero/>
      <Products search={search} />
      <About/>
      <Footer/>
    </>
  )
}

export default App
