import PageWrapper from "@/Components/Scenes/PageWrapper/PageWrapper";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="appWrapper">
      <BrowserRouter>
        <PageWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
