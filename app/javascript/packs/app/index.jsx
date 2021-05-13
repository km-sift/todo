import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./todo-list";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TodoList />
  </QueryClientProvider>
);

export default App;
