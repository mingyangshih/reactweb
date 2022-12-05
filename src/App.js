import "./App.css";
// import ItemDetail from "./components/ItemDetail";
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from "./components/Header";
// import Form from "./components/Form";
import { Fragment } from "react";

import PageHome from './components/PageHome'
import PageNews from './components/PageNews'
import PageAbout from './components/PageAbout'
import PageNewsDetail from './components/PageNewsDetail'

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
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="/home"  element={<PageHome/>} exact></Route>
            <Route path="/about" element={<PageAbout/>}></Route>
            <Route path="/about/komavideo" element={<h2 className="text-success">About Video</h2>}>
            </Route>
            <Route path="/news" element={<PageNews/>} exact="true">
            </Route>
            <Route path="/news/:id" element={<PageNewsDetail/>}>
            </Route>
          </Routes>
        </div>
      {/* <Form appData={appData} onSave={handlerAppDataEvent} /> */}
    </Fragment>
  );
}
export default App;
