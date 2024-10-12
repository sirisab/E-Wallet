import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import StartPage from "./routes/StartPage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<StartPage />}></Route>)
);
function App() {
  return (
    <>
      <h1>E-wallet</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
