
import {createBrowserRouter} from "react-router-dom";
import Home from './../Home';


  const Router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/schedule",
          // element: <SchedulePage />,
        },
      ],
    },
  ]);

export default Router;