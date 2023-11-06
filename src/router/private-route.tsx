import { RouteProps, Route, Redirect, useLocation } from "react-router-dom";

type PrivateRouteProps = {
  component: React.ElementType;
} & RouteProps;

const PrivateRoute = ({
  component: Component,
  children,
  ...rest
}: PrivateRouteProps) => {
  const location = useLocation();
  const isAuthenticated = false;
  if (isAuthenticated) {
    return children ? (
      <Route {...rest}>{children}</Route>
    ) : (
      <Route {...rest} render={(props) => <Component {...props} />} />
    );
  } else {
    return <Redirect to={{ pathname: "/", state: { referrer: location } }} />;
  }
};

export default PrivateRoute;
