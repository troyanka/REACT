import Results from "../components/Results/Results";
import Header from "./Header";
import { appInit } from '../actions/actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(appInit()), []);

    return (
        <main>
            <Header />
            <Results />
        </main>
    );
}

export default MainContainer;