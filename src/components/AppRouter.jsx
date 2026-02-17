import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { privateRoutes, publicRoutes } from "../routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../main";

const AppRouter = () => {
  const { auth } = React.useContext(Context);
  const [user] =  useAuthState(auth);

  return (
    <Routes>
      {(user ? privateRoutes : publicRoutes).map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route
        path="*"
        element={<Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
