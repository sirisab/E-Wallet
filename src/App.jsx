import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import StartPage from './routes/StartPage';
import AddCardPage from './routes/AddCardPage';
import Root from './routes/Root';
import EditCardPage from './routes/EditCardPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<StartPage />} />
      <Route path='addcard' element={<AddCardPage />} />
      <Route path='card/:cardId' element={<EditCardPage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
