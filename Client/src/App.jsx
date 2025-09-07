import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import Partners from "./components/Partners";
import Highlight from "./components/Highligthts";
// import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <main className="overflow-hidden text-neutral-200 antialiased custom-cursor">
      {/* <CustomCursor /> */}
      <Preview />
      <Navbar />
      <Highlight/>
      <Partners/>
      <Form/>
      <Footer />
    </main>
  );
}

export default App;
