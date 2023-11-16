import { Switch, Route } from "react-router-dom";
import type { FC } from "react";

import { ErrorBoundaryProvider } from "@config";

import PrivateRoute from "./private-route";
import { useGetUser } from "@core/user";

//These are just sample components to handle routing
const Login: FC = () => {
  const { data: userData } = useGetUser({ id: 1 });
  // const { data: usersListData } = useGetUsers();

  // console.log({ usersListData });
  console.log({ userData });

  return (
    <div>
      <div>LOGIN PAGE</div>
    </div>
  );
};
const PostLogin: FC = () => {
  return <div>POST LOGIN PAGE</div>;
};

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
