import {Component} from "react";

/*
    A class component must include the extends React.Component statement.
    This statement creates an inheritance to React.Component,
    and gives your component access to React.Component's functions.
*/
export class AlertsMessage extends Component {

    #sayHiMessages = ["Nice to meet you","Greeting","What are you doing?"];


    sayHi1() {
        // ** JSX write inside return ( html tag ) ** by default it can not be multiple tags
        return (
            // *** in react we write style inside style={{ <attributes css>:<value> }}
            <p className="alert alert-success mt-3" style={{fontSize: "20px", fontWeight: "bold"}}>
                How are you?
            </p>
        )
    }

    sayHi2() {
        return <p className="alert alert-danger mt-3" style={{fontSize: "20px", fontWeight: "bold"}}>
            How have you been ?
        </p>
    }

    // work with loop
    sayHi3() {
        return (
            this.#sayHiMessages.map(message => (
                <p className="alert alert-primary mt-3"
                   style={{fontSize: "20px", fontWeight: "bold"}}
                   key={message}>
                    {message}
                </p>
            ))
        )
    }


    render() {
        return (
            // if we don't use <> </> we can not have many <div> tags
            // Short Syntax <> === <React.Fragment>
            <>
                <div className={"mt-4"}>
                    {this.sayHi1()}
                </div>
                <div className={"mt-3"}>
                    {this.sayHi2()}
                </div>
                <div className={"mt-3"}>
                    {this.sayHi3()}
                </div>
            </>
        )
    }

}

