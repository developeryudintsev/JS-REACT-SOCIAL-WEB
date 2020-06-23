import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div class='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs AppDealogsData={props.dealogsData} AppMassageData={props.massageData}/>}/>
                    <Route path='/profile' render={()=><Profile ProfilePostData={props.PostData}/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;