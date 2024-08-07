import {Component} from "react";
import {Robot} from "../../entities/robot";
import {} from "../../assets/css/BaseStyle.css" // import Each style ,Now you have to put on style attribute
export class LogicAndEvents extends Component {

    #component
    // JavaScript Object for changing style inline
    #myLayoutStyle = {
        margin: "0 auto"
    }

    constructor(props) {
        super(props);
        console.log('LogicAndEvents Component is initialized.');
        // initial state
        this.state = {
            option: 0
        };
    }


    changeOptionAfterClick = (event) => {
        // console.log(event.target.value)
        this.setState({
            option: event.target.value
        })
    }


    render() {

        switch (this.state.option) {
            case "1":
                this.#component = <IncrementAndDecrementInteger number={1}/>
                break;
            case "2":
                this.#component = <ReadAndReadsDataList/>
                break;
            case "3":
                // this.#component = <ReadAndReadsDataList/>
                break;
            default:
                break
        }


        return (
            <>
                <div className={"container mt-4"}>
                    {/* we pass javascript object thu {} */}
                    <div className={"card w-75"} style={this.#myLayoutStyle}>
                        <h2 className={"card-header"}>Each component is inside child class</h2>
                        <div className={"card-body"}>
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="radio"
                                       name="option"
                                       value="1"
                                       onChange={this.changeOptionAfterClick}
                                />
                                <label className="form-check-label">
                                    Increment & Decrement Integer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="radio"
                                       name="option"
                                       value="2"
                                       onChange={this.changeOptionAfterClick}
                                />
                                <label className="form-check-label">
                                    Read & Reads Data List
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="radio"
                                       name="option"
                                       value="3"
                                       onChange={this.changeOptionAfterClick}
                                />
                                <label className="form-check-label">
                                    To Do..
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* End card radio button */}

                    {this.#component}

                </div>
            </>
        )
    }

}


class IncrementAndDecrementInteger extends Component {

    #number

    constructor(props) {
        super(props);
        this.#number = props.number
        this.state = {
            number: this.#number,
        }
    }

    componentWillUnmount() {
        console.log("IncrementAndDecrementInteger component is unmount");
    }

    incrementStateNumberAfterClick = () => {
        this.#number++
        this.setState({
            number: this.#number,
        })
    }

    decrementStateNumberAfterClick = () => {
        this.#number--
        this.setState({
            number: this.#number,
        })
    }

    render() {
        return (
            <div className="card mt-3 w-50" style={{margin: "0 auto"}}>
                <h5 className="card-header">Work with onclick</h5>
                <div className="card-body">
                    {/* props.<> can not change */}
                    <h5 className="card-title">Number is {this.state.number}</h5>
                    <button className="btn btn-success" onClick={this.incrementStateNumberAfterClick}>increment</button>
                    <button className="btn btn-warning m-lg-2" onClick={this.decrementStateNumberAfterClick}>decrement
                    </button>
                </div>
            </div>
        )
    }

}


class ReadAndReadsDataList extends Component {

    #robots = []
    #robotsCanChange = []

    constructor(props, context) {
        super(props, context);
        // ** initial data as list
        this.#robots.push(new Robot(1, "RXA100-100", 1200000, true))
        this.#robots.push(new Robot(2, "RXA101-101", 1100000, true))
        this.#robots.push(new Robot(3, "RXA102-102", 1350000, false))
        this.#robots.push(new Robot(4, "RXA103-103", 1270000, true))
        this.#robots.push(new Robot(5, "RXA104-104", 1800000, false))
        // ** initial state
        this.state = {
            robotIdSelected: null
        }
        this.#robotsCanChange = this.#robots
    }

    handleSearchByRobotId = (event) => {
        // ** it is importance for dynamic ,don't know way but if remove this event did not work
        this.setState({})

        // use == it works *** == in JavaScript is used for comparing two variables, But it ignores the datatype of variable.
        // use === it does not work *** === is used for comparing two variables, but this operator also checks datatype and compares two values
        // this.#robotsCanChange = this.#robots.filter((robot) => robot.rid == event.target.value) // ** compare by ignoring datatypes
        this.#robotsCanChange = this.#robots.filter((robot) => robot.rid === parseInt(event.target.value))

        if (this.#robotsCanChange.length === 0) {
            this.#robotsCanChange = this.#robots
        }
    }

    removeRobotById = (robot) => {
        // first we have to find index by object
        const index = this.#robotsCanChange.indexOf(robot)
        // remove index
        this.#robotsCanChange.splice(index, 1)
        // update main
        this.#robots = this.#robotsCanChange
    }

    cloneRobot = (robotClone) => {

        // ** key is unique If we remove some robots , This way it's good to clone robot
        const lastRid = this.#robotsCanChange[this.#robotsCanChange.length-1].rid
        const robotNew = new Robot(lastRid+1 ,  robotClone.codeName,robotClone.price, robotClone.active)
        this.#robotsCanChange.push(robotNew)
        this.#robots = this.#robotsCanChange
    }

    handleOnRobotIdClick = (robotId) => {
        this.setState({
            robotIdSelected: robotId
        })
    }

    getStyleIfRobotIdClick = (robotId) => {
        if (robotId === this.state.robotIdSelected) {
            return "table table-dark"
        }
        return ""
    }


    render() {
        return (
            <>
                <div>
                    <div className="container mb-3 mt-3 w-25">
                        <input type="number"
                               className="form-control"
                               name="rid"
                               placeholder={"Search By Id..."}
                               onChange={this.handleSearchByRobotId} /* this event it impacts to #robotsCanChange */
                        />
                    </div>
                    <table className="table mt-3 w-50" style={{margin: "0 auto"}}>

                        <thead className="table table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Code Name</th>
                            <th>Price</th>
                            <th>Active</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.#robotsCanChange.map((robot, index) => (
                                <tr key={robot.rid}
                                    // *** this way work Good for function void and no parameter as type event
                                    onClick={() => this.handleOnRobotIdClick(robot.rid)}
                                    // *** If function has a return You don't need to use arrow function
                                    className={this.getStyleIfRobotIdClick(robot.rid)}>
                                    <td>{robot.rid}</td>
                                    <td>{robot.codeName}</td>
                                    <td>{robot.price}</td>
                                    <td>
                                        {/* condition && <if true do this> */}
                                        {robot.active && <strong className={"BT btn btn-success m-lg-2"}>True</strong>}
                                        {robot.active === false && <strong className={"BF btn btn-danger m-lg-2"}>False</strong>}
                                    </td>
                                    <td>
                                        <button className={"btn btn-warning"}
                                                onClick={() => this.removeRobotById(robot)}>Remove
                                        </button>
                                        <button className={"btn btn-info m-lg-2"}
                                                onClick={() => this.cloneRobot(robot)}>Clone
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}