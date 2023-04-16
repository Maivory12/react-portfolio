import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Experience', description: 'Portraits of people in my life' },
    
  ]); 
  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
      <main>
        {!contactSelected ? (
          <>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
        </>
        ) : (
 <ContactForm></ContactForm>
        )}
        {/* <Footer></Footer> */}
      </main>

      </main>
    </div>
  );
}

export default App;
