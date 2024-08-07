import {useState} from "react";
import {Robot} from "../../entities/robot";

const Form1 = () => {
    // state hook with function
    // first argument is data default
    const [email, setEmail] = useState("email@example.com");
    const [username, setUsername] = useState("username");

    //*** function inside function
    const handleOnClick = () => {
        console.log(email, username)
    }

    return (
        <>
            <div className={"container w-50 mt-4"}>
                <h3 className={"p-2"}>Work With Form Inside Function (name,id on tag doesn't matter) *** Handle
                    Functions</h3>
                <form className={"form-control p-2"}>
                    <div className="mb-3">
                        Email
                        <input type="email" className="form-control"
                               placeholder={email}
                               onChange={(event) => setEmail(event.target.value)}/>
                        {/* <condition if true> && <to do>*/}
                        <strong className={"text-danger mt-1"}>
                            {email.length <= 5 && "length is not good"}
                        </strong>
                        <strong className={"text-success  mt-1"}>
                            {email.length > 5 && "length is enough"}
                        </strong>
                    </div>
                    <div className="mb-3">
                        Username
                        <input type="text" className="form-control"
                               placeholder={username}
                               onChange={(event) => setUsername(event.target.value)}/>
                        <strong className={"text-success"}>{username}</strong>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
                </form>
            </div>
        </>
    )

}


const Form2 = () => {
    const [language1, setLanguage1] = useState(false);
    const [language2, setLanguage2] = useState(false);
    const [language3, setLanguage3] = useState(false);

    // these function for changing language1,2,3
    const handleLanguage1Click = () => {
        // why !
        // if we click we have to change default
        // *** the first way change by ! it means !true = false
        setLanguage1(!language1)
    }

    const handleLanguage2Click = () => {
        setLanguage2(!language2)
    }

    const handleLanguage3Click = () => {
        setLanguage3(!language3)
    }

    const handleCheckClick = () => {
        console.log(language1, language2, language3)
    }

    return (
        <>
            <div className={"container w-50 mt-4"}>
                <form className={"form-control"}>
                    <h3>which language you know about programming ?</h3>
                    <div className="form-check">
                        {/*
                            If we work with checkbox we have to handle for setting each checkbox
                        */}
                        <input className="form-check-input"
                               type="checkbox"
                               value={"Java"}
                               onChange={handleLanguage1Click}
                        />
                        <label className="form-check-label">
                            Java
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value={"C,C++"}
                               onChange={handleLanguage2Click}/>
                        <label className="form-check-label">
                            C,C++
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value={"Php"}
                               onChange={handleLanguage3Click}/>
                        <label className="form-check-label">
                            Php
                        </label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleCheckClick}>Submit</button>
                </form>
            </div>
        </>
    )
}


// ** multiple inputs , setInputs
// Cool !
const Form3MultipleInputs = () => {

    // **  Way to set keys , values
    // ** This way is good for input That's not changed
    const [inputs, setInputs] = useState({})


    // ** Try inside class
    const handleLoadEachInputToInputsArray = (event) => {

        //**
        const name = event.target.name; // name it means we get name attribute on input tag
        console.log(`name attribute is ${name}`)
        let value = event.target.value; // value hols as value
        console.log(`value of name attribute is ${value}`)


        console.log(value)
        // work follow order input
        // ** Three Dots (…) Operator
        // **  (...) allows an iterable such as an array expression or string to be expanded in places
        // **  where zero or more arguments (for function calls) or elements (for array literals) are expected,
        setInputs(values => ({
                ...values,
                [name]: value
            })
        )
    }


    // robots as array , setRobots work as seem set up each element

    const demoRobots = [
        new Robot(1,'RX-A-100',90000000,true),
        new Robot(2,'GX-R-202',120000000,true),
        new Robot(3,'CXT-100',850000000,true)
    ]
    const [robots, setRobots] = useState(demoRobots) // if need to initial pass on useState(<data>) if not pass on useState([])
    const [active, setActive] = useState(false)
    const [selectIndex, setSelectIndex] = useState()

    //  Good way **  There are multiple ways to do this, but the easiest one is to use the array spread syntax
    const handleOnClick = () => {
        setRobots( // ** Replace the state
            [ // with a new array
                ...robots, // that contains all the old items
                new Robot(inputs.rid, inputs.codeName, inputs.price,active) // and data to robots
            ]
        );
        console.log(robots)
    }


    const handleActiveCheck = () =>{
        setActive(!active) // switch value after do event
        console.log(active)
    }
    
    const handleOnClickRow = (index) =>{
        setSelectIndex(index)
    }
    
    const handleStyleOnClickRow = (index,selectedIndex) => {
        if (index === selectedIndex) {
            return "table table-dark"
        }
        return "";
    }

    return (
        <>
            <div className={"container w-50 mt-4"}>
                <h3 className={"p-2"}>Work With Form Inside Function *** Multiple Inputs *** We have to set name
                    attribute
                    on name attribute tag as the same default you work with html</h3>
                <form className={"form-control p-2"}>
                    <div className="mb-3">
                        Rid
                        <input type="number"
                               className="form-control"
                               name="rid"
                               onChange={handleLoadEachInputToInputsArray}
                        />
                    </div>
                    <div className="mb-3">
                        Code Name
                        <input type="text"
                               className="form-control"
                               name="codeName"
                               onChange={handleLoadEachInputToInputsArray}
                        />
                    </div>
                    <div className="mb-3">
                        Price
                        <input type="number"
                               className="form-control"
                               name="price"
                               onChange={handleLoadEachInputToInputsArray}
                        />
                    </div>

                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               onChange={handleActiveCheck}/>
                        <label className="form-check-label">
                            Active
                        </label>
                    </div>



                    <button type="button" className="btn btn-primary" onClick={handleOnClick}>Submit</button>

                </form>
            </div>

            <div>
                <table className="table mt-3 w-50" style={{margin: "0 auto"}}>
                    <thead className="table table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Code Name</th>
                        <th>Price</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        robots.map((robot , index) => (
                            <tr key={robot.rid}
                                className={handleStyleOnClickRow(index,selectIndex)} // dynamic style
                                onClick={() => handleOnClickRow(index)}>
                                <td>{robot.rid}</td>
                                <td>{robot.codeName}</td>
                                <td>{robot.price}</td>
                                <td>
                                    {robot.active && "true"}
                                    {robot.active === false && "false"}
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



const Form4setSateByHooks = () => {


    /*
    // setFramework by hooks
    *** Hooks will not work in React class components.
    Hooks can only be called inside React function components.
    Hooks can only be called at the top level of a component.
    Hooks cannot be conditional
    */
    const [framework,setFramework] = useState("Nothing")


    return (
        <>
            <div className={"container w-50 mt-4"}>
                <form className={"form-control"}>
                    <h3>{framework} is our favorite framework</h3>
                    <h3>*** React Hooks helps for setting event </h3>
                    <div className="form-check">
                        {/*
                            If we work with checkbox we have to handle for setting each checkbox
                        */}
                        <input className="form-check-input"
                               type="radio"
                               name={"framework"}
                               value={"Angular"}
                               onClick={() => setFramework("Angular")}
                        />
                        <label className="form-check-label">
                            Angular
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input"
                               type="radio"
                               name={"framework"}
                               value={"Spring & Spring Boot"}
                               // call event.target.value to get value attribute
                               onClick={(event) => setFramework(event.target.value)}
                        />
                        <label className="form-check-label">
                            Spring & Spring Boot
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input"
                               type="radio"
                               name={"framework"}
                               value={"React"}
                               onClick={(event) => setFramework(event.target.value)}
                        />
                        <label className="form-check-label">
                            React
                        </label>
                    </div>

                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}



const Form5setStateAsObject = () => {
    const [car,setCar] = useState({
        brand: null,
        model: null,
        year: null,
        color: null
    })

    const handleChangeBrand = (event) => {
        setCar(previousState => {
            return { ...previousState, brand:event.target.value}
        })
    }
    const handleChangeModel = (event) => {
        setCar(previousState => {
            return { ...previousState, model:event.target.value}
        })
    }
    const handleChangeYear = (event) => {
        setCar(previousState => {
            return { ...previousState, year:event.target.value}
        })
    }
    const handleChangeColor = (event) => {
        setCar(previousState => {
            return { ...previousState, color:event.target.value}
        })
    }

    const handleOnClick = () => {
        console.log(car)
    }
    return (
        <>
            <div className={"container w-50 mt-4"}>
                <form className={"form-control p-2"}>
                <h3 className={"p-2"}>*** The Way to Updating Objects and Arrays in State</h3>
                    <div className="mb-3">
                        Brand
                        <input type="text" className="form-control" name="brand" onChange={handleChangeBrand}/>
                    </div>
                    <div className="mb-3">
                        Model
                        <input type="text" className="form-control" name="model" onChange={handleChangeModel}/>
                    </div>
                    <div className="mb-3">
                        Year
                        <input type="number" className="form-control" name="year" onChange={handleChangeYear}/>
                    </div>
                    <div className="mb-3">
                        Color
                        <input type="text" className="form-control" name="color" onChange={handleChangeColor}/>
                    </div>

                    {(car.brand !== null && car.brand !== null && car.color !== null && car.price !== null) && <h2 className={"alert alert-primary"}>{car.brand} {car.model} {car.year} {car.color}</h2>}

                    <button type="button" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
                </form>
            </div>
        </>
    )
}

export {
    Form1,
    Form2,
    Form3MultipleInputs,
    Form4setSateByHooks,
    Form5setStateAsObject
}