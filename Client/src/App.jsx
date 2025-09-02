import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Price from "./components/Price";

function App() {
  return (
    <main>
      <Header/>
      <Preview/>
      <Price/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
