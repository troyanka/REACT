import Results from "../components/Results/Results";
import Header from "./Header";
import { appInit } from '../actions/actions';

// TODO: check router usage
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const MainContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(appInit()), []);

    return (
        <main>
            <Header />
            <Router>
                <Route path="/">
                    <Results />
                </Route>
            </Router>
        </main>
    );
}

export default MainContainer;