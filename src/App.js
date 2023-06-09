import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router/Router";
import './App.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
