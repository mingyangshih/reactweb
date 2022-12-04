import "./App.css";
// import ItemDetail from "./components/ItemDetail";
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
// import Form from "./components/Form";
import { Fragment } from "react";

import PageHome from './components/PageHome'
import PageNews from './components/PageNews'
import PageAbout from './components/PageAbout'

function App() {
  // const appData = {
  //   accessKeyId: "abcde",
  //   secretAccessKey: "12345",
  //   regionID: "JP"
  // };
  // const handlerAppDataEvent = (appdata) => {
  //   console.log(appdata);
  // };

  return (
    <Fragment>
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/"  element={<PageHome/>}>
              {/* <PageHome></PageHome> */}
            </Route>
            <Route path="/news" element={<PageNews/>}>
              {/* <PageNews></PageNews> */}
            </Route>
            <Route path="/about" element={<PageAbout/>}>
              {/* <PageAbout></PageAbout> */}
            </Route>
          </Routes>
        </div>
      {/* <Form appData={appData} onSave={handlerAppDataEvent} /> */}
    </Fragment>
  );
}
export default App;
