import { Switch, Route } from "react-router-dom";
import type { FC } from "react";

import { ErrorBoundaryProvider } from "@config";

import PrivateRoute from "./private-route";

//These are just sample components to handle routing
const Login: FC = () => <div>LOGIN PAGE</div>;
const PostLogin: FC = () => <div>POST LOGIN PAGE</div>;

const PostLoginChunks = () => (
  <ErrorBoundaryProvider>
    <Switch>
      <PrivateRoute component={PostLogin} />
    </Switch>
  </ErrorBoundaryProvider>
);

const MainRouter = () => (
  <ErrorBoundaryProvider>
    <Switch>
      <Route exact path={"/"} component={Login} />
      <Route component={PostLoginChunks} />
    </Switch>
  </ErrorBoundaryProvider>
);

export default MainRouter;
