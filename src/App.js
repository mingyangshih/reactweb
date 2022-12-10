import './App.css';
// import ItemDetail from "./components/ItemDetail";
import {Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header';
// import Form from "./components/Form";
import {Fragment, createContext, useState} from 'react';

import PageHome from './components/PageHome';
import PageNews from './components/PageNews';
import PageAbout from './components/PageAbout';
import PageNewsDetail from './components/PageNewsDetail';
import Clicker from './pages/Clicker';
import {useEffect} from 'react';
// use fetch
import useFetch from 'use-http';
// use input
import {useInput} from 'rooks';

export const Context = createContext();

function App() {
    const {get, post, response, loading, error} = useFetch(`https://swapi.dev/api`);
    const [dataset, setDataset] = useState([]);
    const inputUserName = useInput('Clayton');
    useEffect(() => {
        search('films');
    }, []);

    async function search(presource) {
        const datalist = await get('/' + presource);
        if (response.ok) setDataset(datalist.results);
        else setDataset([]);
    }

    const [contextState, setContextState] = useState({
        siteName: 'Context Test',
        author: 'Clayton',
        sayHello: params => {
            console.log(`Hello ${params}. ${Math.random.toString()}`);
        },
    });
    return (
        <Fragment>
            <Header />
            <input type="text" {...inputUserName} />
            <div className="p-4">
                <Context.Provider value={contextState}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />}></Route>
                        <Route path="/home" element={<PageHome />} exact></Route>
                        <Route path="/about" element={<PageAbout />}></Route>
                        <Route path="/about/komavideo" element={<h2 className="text-success">About Video</h2>}></Route>
                        <Route path="/news" element={<PageNews />} exact="true"></Route>
                        <Route path="/news/:id" element={<PageNewsDetail />}></Route>
                        <Route path="/clicker" element={<Clicker />}></Route>
                    </Routes>
                </Context.Provider>
            </div>
            {/* <Form appData={appData} onSave={handlerAppDataEvent} /> */}
        </Fragment>
    );
}
export default App;
