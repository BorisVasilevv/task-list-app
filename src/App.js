
import './reset.css';
import './App.css';
import ToDoListPage from './components/ToDoListPage';

import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ToDoListPage/>
      </QueryClientProvider>
  );
}

export default App;
