
import {createBrowserRouter} from "react-router-dom";
import App from "../App";


  const Router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "/schedule",
          // element: <SchedulePage />,
        },
      ],
    },
  ]);

export default Router;