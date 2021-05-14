import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./todo-list";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TodoList />
    </div>
  </QueryClientProvider>
);

export default App;
