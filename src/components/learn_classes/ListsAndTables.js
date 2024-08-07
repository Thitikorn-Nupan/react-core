import {Component} from "react";
import {Student} from "../../entities/student";

export class ListsAndTables extends Component {

    #students = []

    componentWillUnmount() {
        console.log("ListsAndTables component is unmount");
    }

    constructor(props) {

        super(props);
        this.#students.push(new Student(1, "Peter Parker", 26))
        this.#students.push(new Student(2, "Mark Ryder", 25))
        this.#students.push(new Student(3, "Json Slider", 23))
        this.#students.push(new Student(4, "Ajax Parker", 27))
        this.#students.push(new Student(5, "Stone Austin", 21))

        this.state = {
            styleRow1: '',
            styleRow2: '',
            styleRow3: '',
            styleRow4: '',
            styleRow5: '',
            selectedIndex: 0
        }
    }


    // ** Table1 no loop
    table1StudentsNoLoop() {
        return (
            <>
                <div>
                    <h3 style={{marginLeft: "320px"}}>** No Loop</h3>
                    <table className="table mt-3 w-50" style={{margin: "0 auto"}}>
                        <thead className="table table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Fullname</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*
                         all tag can have event
                         Note if you pass arg on handle function
                         You have to use as function void (no return)
                         () => this.<function>(<args>)
                        */}
                        <tr className={this.state.styleRow1} onClick={() => this.handle1OnRowClick(this.#students[0])}>
                            <td>{this.#students[0].sid}</td>
                            <td>{this.#students[0].fullname}</td>
                            <td>{this.#students[0].age}</td>
                        </tr>
                        <tr className={this.state.styleRow2} onClick={() => this.handle1OnRowClick(this.#students[1])}>
                            <td>{this.#students[1].sid}</td>
                            <td>{this.#students[1].fullname}</td>
                            <td>{this.#students[1].age}</td>
                        </tr>
                        <tr className={this.state.styleRow3} onClick={() => this.handle1OnRowClick(this.#students[2])}>
                            <td>{this.#students[2].sid}</td>
                            <td>{this.#students[2].fullname}</td>
                            <td>{this.#students[2].age}</td>
                        </tr>
                        <tr className={this.state.styleRow4} onClick={() => this.handle1OnRowClick(this.#students[3])}>
                            <td>{this.#students[3].sid}</td>
                            <td>{this.#students[3].fullname}</td>
                            <td>{this.#students[3].age}</td>
                        </tr>
                        <tr className={this.state.styleRow5} onClick={() => this.handle1OnRowClick(this.#students[4])}>
                            <td>{this.#students[4].sid}</td>
                            <td>{this.#students[4].fullname}</td>
                            <td>{this.#students[4].age}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </>
        )
    }

    handle1OnRowClick = (student) => {
        console.log(student.sid, student.fullname, student.age)
        if (student.sid === 1) {
            this.setState({
                styleRow1: 'table table-dark'
            })
        }
        if (student.sid !== 1) {
            this.setState({
                styleRow1: ''
            })
        }
        if (student.sid === 2) {
            this.setState({
                styleRow2: 'table table-dark'
            })
        }
        if (student.sid !== 2) {
            this.setState({
                styleRow2: ''
            })
        }
        if (student.sid === 3) {
            this.setState({
                styleRow3: 'table table-dark'
            })
        }
        if (student.sid !== 3) {
            this.setState({
                styleRow3: ''
            })
        }
        if (student.sid === 4) {
            this.setState({
                styleRow4: 'table table-dark'
            })
        }
        if (student.sid !== 4) {
            this.setState({
                styleRow4: ''
            })
        }
        if (student.sid === 5) {
            this.setState({
                styleRow5: 'table table-dark'
            })
        }
        if (student.sid !== 5) {
            this.setState({
                styleRow5: ''
            })
        }

        // ** for table 2
        this.setState({
            selectedIndex: student.sid
        })
    }
    // ** Table1 no loop


    // ** Table2
    table2StudentsWithLoop() {
        return (
            <>
                <div>
                    <h3 style={{marginLeft: "320px"}}>** With Loop</h3>
                    <table className="table mt-3 w-50" style={{margin: "0 auto"}}>
                        <thead className="table table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Fullname</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.#students.map(
                                (student) => (
                                    // if I called by this.handle2OnRowClick ** student will be undefined
                                    <tr className={this.state.selectedIndex === student.sid ? 'table table-dark' : ''}
                                        key={student.sid}
                                        onClick={() => this.handle2OnRowClick(student)}>
                                        <td>{student.sid}</td>
                                        <td>{student.fullname}</td>
                                        <td>{student.age}</td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    handle2OnRowClick = (student) => {
        console.log(student.sid, student.fullname, student.age)
        this.setState({
            // selectedIndex holds id for condition it's real time
            selectedIndex: student.sid,
        })
    }

    // ** Table2



    // ** List3
    list3EntityOfPropsWithLoop() {
        return (
            <>
                <div>
                    <h3 style={{marginLeft: "320px"}}>** List With Loop</h3>
                    <ul className={"list-group w-50"} style={{margin: "0 auto"}}>
                        <li className={"list-group-item active"}>language</li>
                        {
                            /* props.<> can not change */
                            this.props.data.map(item => (
                                <li className={"list-group-item"} key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }
    // ** Table3


    render() {
        return (
            <>
                <div className={"container mt-4"}>
                    {this.table1StudentsNoLoop()}
                </div>
                <div className={"container mt-4"}>
                    {this.table2StudentsWithLoop()}
                </div>
                <div className={"container mt-4"}>
                    {this.list3EntityOfPropsWithLoop()}
                </div>
            </>
        )
    }
}