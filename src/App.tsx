import Footer from "./page/Footer";
import Header from "./page/Header";
import Main from "./page/Main";
import { Phase } from "./slices/statusSlice";

function App() {
  const phase = Phase.PURCHASE;
  return (
    <div className="flex flex-col h-screen">
      <Header phase={phase} />
      <Main phase={phase} />
      <Footer />
    </div>
  );
}

export default App;
