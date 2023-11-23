import { AllRoutes } from "./AllRoutes/AllRoutes";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App text-proxima-nova">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
