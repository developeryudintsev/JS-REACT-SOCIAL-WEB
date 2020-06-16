import React from 'react';
import './App.css';
import Header from "./components/Header.jsx/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Profile from "./components/Profile/Profile";
import {Route,BrowserRouter} from 'react-router-dom';
import s from "./components/Profile/Profile.module.css";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper '>
                <Header/>
                <Navbar/>

                <div class='app-wrapper-content '>
                    <Route ex path='/dialogs' component={Dialogs}/>
                    <Route  path='/profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
