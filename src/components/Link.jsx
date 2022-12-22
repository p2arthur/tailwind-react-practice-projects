import UseNavigationContext from "../hooks/use-navigation-context";

function Link({ children, path, className }) {
  const { navigate, currentPage } = UseNavigationContext();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <a
      onClick={handleClick}
      className={`${className} ${
        currentPage === path ? "border-b-4 border-green-300" : null
      }`}
      href={path}
    >
      {children}
    </a>
  );
}

export default Link;
