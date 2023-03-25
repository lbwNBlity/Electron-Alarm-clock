import React from "react";
import { useRoutes } from "react-router-dom";

import Home from './components/Home';
import Counter from './components/Counter';

import styles from './App.less';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/2",
      element: <Counter />,
    },
  ]);

  return <div className={styles.container}>{element}</div>;
}

export default App;
