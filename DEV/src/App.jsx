
import Navbar from "./components/Navbar";

import Preview from "./components/Preview";

import Footer from "./components/Footer";
// import CustomCursor from './components/CustomCursor';
import Form from "./components/Form";
import Highlight from "./components/Highligthts";
import Partners from "./components/Partners";

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
