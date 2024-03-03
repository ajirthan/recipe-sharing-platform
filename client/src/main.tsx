import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { ErrorPage, SignIn, SignUp, SubmitRecipe, UserProfile } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}></Route>
      <Route path="/home" element={<App />}></Route>
      <Route path="/recipies" element={<App />}></Route>
      <Route path="signin" element={<SignIn />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="submitrecipe" element={<SubmitRecipe />}></Route>
      <Route path="userprofile" element={<UserProfile />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
