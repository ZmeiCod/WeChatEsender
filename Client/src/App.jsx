import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import Partners from "./components/Partners";
import Advantages from "./components/Expertise";
import ProcessBlock from "./components/Process";
import CustomCursor from './components/CustomCursor';
import Services from "./components/Services";

function App() {
  return (
    <main className="overflow-hidden text-neutral-200">
      <Preview />
      <Navbar />
      <ProcessBlock/>
      <Services/>
      <Advantages/>
      {/* <Partners/> */}
      <Form/>
      <Footer />
      <CustomCursor />
    </main>
  );
}

export default App;
