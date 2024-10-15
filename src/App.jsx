import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import StartPage from "./routes/StartPage";
import AddCardPage from "./routes/AddCardPage";
import Root from "./routes/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<StartPage />} />
      <Route path="addcard" element={<AddCardPage />} />
    </Route>
  )
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
