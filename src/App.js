// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Forms} from "./components/learn_classes/Forms";
import {
    Form1,
    Form2,
    Form3MultipleInputs,
    Form4setSateByHooks,
    Form5setStateAsObject
} from "./components/learn_functions/Forms";
import {AlertsMessage} from "./components/learn_classes/AlertsMessage";
import {ListsAndTables} from "./components/learn_classes/ListsAndTables";
import {LogicAndEvents} from "./components/play_events/LogicAndEvents";
import {ReadsConceptClass} from "./components/play_api/ReadsConceptClass";
import {ReadsConceptFunction} from "./components/play_api/ReadsConceptFunction";


function App() {
    return (
        /*
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </div>
        */
        // *** React router  , We wrap our content first with <BrowserRouter>.
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Navbar/>}>

                    <Route path={"/alerts-with-classes"} element={
                        /*
                        Short Syntax <> === <React.Fragment>
                        A common pattern in React is for a component to return multiple elements.
                        Fragments let you group a list of children without adding extra nodes to the DOM.
                        */
                        <>
                            <div className={"container w-50"}>
                                {/* AlertsMessage works as one page of your app */}
                                <AlertsMessage/>
                            </div>
                        </>
                    }/>

                    <Route path={"/forms-with-classes"} element={
                        // If we have no another components <> </> or Fragment it doesn't need
                        <>
                            <Forms/>
                        </>
                    }/>

                    <Route path={"/lists-with-classes"} element={
                        <ListsAndTables data={['Java', 'Php', 'C#', 'C++', 'Python', 'Kotlin', 'Ruby']}/>}
                    />
                    <Route path={"/forms-with-functions"} element={
                        <>
                            <Form1/>
                            <Form2/>
                            <Form3MultipleInputs/>
                            <Form4setSateByHooks/>
                            <Form5setStateAsObject/>
                        </>
                    }
                    />

                    <Route path={"/apply-events"} element={
                        <LogicAndEvents />
                    }
                    />

                    <Route path={"/apply-api"} element={
                        <ReadsConceptClass /> // bad performance
                        // <ReadsConceptFunction/>
                    }
                    />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
