import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/Navbar/SearchBar";
import Logs from "./components/Logs/Logs";
import AddBtn from "./components/Buttons/AddBtn";
import AddLogModal from "./components/Modals/AddLogModal";
import EditLogModal from "./components/Modals/EditLogModal";
import AddTechModal from "./components/Modals/AddTechModal";
import ShowTechsModal from "./components/Modals/ShowTechsModal";
import { Provider } from "react-redux";
import store from "./redux/store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <ShowTechsModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};
export default App;
