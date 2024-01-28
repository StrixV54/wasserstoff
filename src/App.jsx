import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-w-screen bg-[#EEF0FA]">
      <Header />
      {/* Changes bw Dashboard and Sales Figure */}
      <Outlet /> 
      <Footer />
    </main>
  );
}

export default App;
