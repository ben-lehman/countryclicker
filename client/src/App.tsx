import { QueryClient, QueryClientProvider } from "react-query";
import GameContainer from "./components/GameContainer";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameContainer />
    </QueryClientProvider>
  );
}

export default App;
