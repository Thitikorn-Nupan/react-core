import {Component} from "react";

export class Forms extends Component {

    //** Form1
    form1WithHandleOnChange() {
        return (
            <>
                <h3 className={"p-2"}>React Work With Form Basic *** Handle Functions</h3>
                <form className={"form-control p-2"} onSubmit={this.handleOnSubmitForm1}>
                    <div className="mb-3">
                        Email
                        <input type="email" className="form-control" name="email" onChange={this.handleOnEmailChange}/>
                    </div>
                    <div className="mb-3">
                        Username
                        <input type="text" className="form-control" name="username"
                               onChange={this.handleOnUsernameChange}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleOnButtonClick}>Submit</button>
                </form>
            </>
        )
    }

    // event will map value of tag input auto ???
    handleOnEmailChange = (event) => {
        // const target = event.target; // ** return tag
        // const value = target.value; // ** return value
        console.log(`email : ${event.target.value}`);
    }
    handleOnUsernameChange = (event) => {
        console.log(`username : ${event.target.value}`);
    }
    handleOnSubmitForm1 = (event) => {
        // *** this way work for onSubmit only
        console.log(`input element[0] is ${event.target[0].value}`);
        console.log(`input element[1] is ${event.target[1].value}`);
    }
    handleOnButtonClick = (event) => {
        console.log(event.target) // return button tag
    }
    //** Form1


    //** Form2
    #email
    #username

    form2WithHandleOnChangeSetToAttributeClass() {
        return (
            <>
                <h3 className={"p-2"}>React Work With Form *** Handle Functions Set to Attributes</h3>
                <form className={"form-control p-2"}>
                    <div className="mb-3">
                        Email
                        <input type="email" className="form-control" name="email"
                               onChange={this.handleOnEmailChangeForm2}/>
                    </div>
                    <div className="mb-3">
                        Username
                        <input type="text" className="form-control" name="username"
                               onChange={this.handleOnUsernameChangeForm2}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleOnButtonClickForm2}>Submit
                    </button>
                </form>
            </>
        )
    }

    handleOnEmailChangeForm2 = (event) => {
        // const target = event.target; // ** return tag
        // const value = target.value; // ** return value
        if (event.target.value.length >= 10) {
            this.#email = event.target.value;
        }

    }
    handleOnUsernameChangeForm2 = (event) => {
        if (event.target.value.length >= 5) {
            console.log(`username : ${event.target.value}`);
            this.#username = event.target.value;
        }
    }

    handleOnButtonClickForm2 = () => {
        console.log(this.#email, this.#username);
    }
    //** Form2


    //** Form3,4
    constructor(props) {
        super(props);
        this.state = {
            email: 'Thitikorn_nupan@outlook.co.th',
            username: 'Thitikorn',
            enableChild: false
        }
    }

    form3WithHandleOnChangeAndStateHook() {
        return (
            <>
                <h3 className={"p-2"}>React Work With Form *** Handle Functions And State Hook</h3>
                <form className={"form-control p-2"}>
                    <div className="mb-3">
                        Email
                        <input type="email" className="form-control" name="email" placeholder={this.state.email}
                               onChange={this.handleOnEmailChangeForm3}/>
                        <span className={"text-danger"}>{
                            this.state.email.length >= 10 &&
                            this.state.email
                        }
                        </span>
                    </div>
                    <div className="mb-3">
                        Username
                        <input type="text" className="form-control" name="username" placeholder={this.state.username}
                               onChange={this.handleOnUsernameChangeForm3}/>
                        <span className={"text-danger"}>{
                            this.state.username.length >= 5 &&
                            this.state.username
                        }
                        </span>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleOnButtonClickForm3}>Submit
                    </button>
                </form>
            </>
        )
    }

    handleOnEmailChangeForm3 = (event) => {
        // const target = event.target; // ** return tag
        // const value = target.value; // ** return value
        if (event.target.value.length >= 10) {
            this.setState({
                email: event.target.value,
            })
        }

    }
    handleOnUsernameChangeForm3 = (event) => {
        if (event.target.value.length >= 5) {
            this.setState({
                username: event.target.value,
            })
        }
    }
    handleOnButtonClickForm3 = () => {
        console.log(this.state.email, this.state.username)
    }
    //** Form3


    //** Form4
    form4WithHandleOnChangeAndChildComponent = () => {

        let formChildTest = null
        // Work with condition
        if (this.state.enableChild) {
            formChildTest = <FormChildForTest a={5} b={5} />
        }
        return (
            <>
                <div className="form-check form-switch m-lg-2">
                    <input className="form-check-input" type="checkbox" checked={this.state.enableChild}
                           onChange={this.handleOnCheckboxChange4}/>
                    <label className="form-check-label">Open Child Component</label>
                    {formChildTest}
                </div>
            </>
        )
    }
    handleOnCheckboxChange4 = () => {
        // console.log(this.state.enableChild) // Focus on checked={this.state.enableChild} if we click it change to be true if unclicked it will be false
        this.setState({
            enableChild: !this.state.enableChild,
        })
    }
    //** Form4


    // if you need to use state all elements(components) work on this method
    // ** The render() method is of course called when a component gets updated,
    render() {
        return (
            <>
                <div className={"container mt-4"}>
                    <div className={"card"}>
                        {this.form1WithHandleOnChange()}
                    </div>
                    <div className={"card mt-3"}>
                        {this.form2WithHandleOnChangeSetToAttributeClass()}
                    </div>
                    <div className={"card mt-3"}>
                        {this.form3WithHandleOnChangeAndStateHook()}
                    </div>
                    <div className={"card mt-3"}>
                        {this.form4WithHandleOnChangeAndChildComponent()}
                    </div>
                </div>
            </>
        );
    }
}

/*
 Lifecycle of Components
 Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
 *************
 constructor()
 getDerivedStateFromProps()
 render()
 componentDidMount()
 *************
 The render() method is required and will always be called, the others are optional and will be called if you define them.
*/
class FormChildForTest extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    // LifeCycle of Component
    // The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
    // unmounted (n. ถอดออก)
    componentWillUnmount() {
        alert("FormChildForTest component is unmounted.");
    }

    alertPlusNumberByProps = () => {
        return (
            <div className="alert alert-danger mt-3" style={{
                width: "auto",
                marginLeft: "-40px"
            }}>{this.props.a} + {this.props.b} = {parseInt(this.props.a) + parseInt(this.props.b)}
            </div>
        )
    }

    render() {
        return this.alertPlusNumberByProps()
    }
}