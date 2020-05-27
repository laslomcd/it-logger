import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/Navbar/SearchBar";
import Logs from "./components/Logs/Logs";
import AddBtn from "./components/Buttons/AddBtn";
import AddLogModal from "./components/Modals/AddLogModal";
import EditLogModal from "./components/Modals/EditLogModal";
import AddTechModal from "./components/Modals/AddTechModal";
import ShowTechsModal from "./components/Modals/ShowTechsModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
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
  );
};
export default App;
