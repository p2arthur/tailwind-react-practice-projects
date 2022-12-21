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
      className={`${className} ${currentPage === path ? "underline" : null}`}
      href={path}
    >
      {children}
    </a>
  );
}

export default Link;
