import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

// Non si importa più switch

const Component = () => {
  let element = useRoutes(routes);
  return element;
};

export default Component;
