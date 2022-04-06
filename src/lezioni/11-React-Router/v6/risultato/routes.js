import React from "react";
import About from "./screen/About";
import ErrorPage from "./screen/ErrorPage";
import Home from "./screen/Home";
import MyProfile from "./screen/MyProfile";
import Profile from "./screen/Profile";
import SingleProfile from "./screen/SingleProfile";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "me",
        element: <MyProfile />,
      },
      {
        path: ":id",
        element: <SingleProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
