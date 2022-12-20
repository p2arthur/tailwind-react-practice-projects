import UseNavigationContext from "../hooks/use-navigation-context";
function Route({ children, path }) {
  const { currentPage } = UseNavigationContext();

  if (path === currentPage) {
    return children;
  }
}

export default Route;
