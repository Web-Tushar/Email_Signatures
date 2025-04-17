import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RootLayout from '../RootLayout/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}  >

        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />

      </Route >

    </Route>
  )
);
const Navbar = () => {
  return (
    <div>

    </div>
  )
}

export default Navbar