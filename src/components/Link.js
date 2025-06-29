import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children }) {
  const {navigate} = useNavigation;

  const classes =classNames('text-blue-500')

  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey){
        return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a href={to} className={classes} onClick={handleClick}>{children}</a>
    </div>
  );
}

export default Link;
