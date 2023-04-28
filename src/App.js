import { StarshipsContextProvider } from "./contexts/StarshipsContext";
import Router from "./router";

function App() {
  return (
    <div>
      <StarshipsContextProvider>
        <Router />
      </StarshipsContextProvider>
    </div>
  );
}

export default App;
