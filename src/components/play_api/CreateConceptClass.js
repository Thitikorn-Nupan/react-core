import {Component} from "react";

export class CreateConceptClass extends Component {
    constructor(props) {
        super(props);
        // ** way to declare array of state
        this.state = {
            /*title : null,
            price : null,
            description : null,
            image: null,
            category: null,*/
            names : [], // stores name of input
            values : [], // stores value of input
            inputs : {}
        }
    }

    componentDidMount() {

    }


    handleEachInputToInputsArray = (event) => {
        // **
        const name = event.target.name; // name it means we get name attribute on input tag
        // console.log(`name attribute is ${name}`)
        const value = event.target.value; // value hols as value
        /*if (name === "title") {
            this.setState({
                title : event.target.value,
            })
        }
        else if (name === "price") {
            this.setState({
                price : event.target.value,
            })
        }
        else if (name === "description") {
            this.setState({
                description : event.target.value,
            })
        }
        else if (name === "image") {
            this.setState({
                image : event.target.value,
            })
        }
        else if (name === "category") {
            this.setState({
                category: event.target.value,
            })
        }*/

        // ** way to set array of state
        this.setState(preState => (
            {
                // Key : [vale each element] === [key,value]
                names : [...preState.names, name] , // optional
                values : [...preState.values, value] ,
            }
        ))


    }

    handleRequestPostMethod = async () => {
        console.log(this.state.inputs)
        // console.log(this.state.values[0],this.state.values[1])
        const response = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: this.state.values[0],
                    price: this.state.values[1],
                    description: this.state.values[2],
                    image: this.state.values[3],
                    category: this.state.values[4]
                }
            )
        })
        // console.log(response) // Response {type: 'cors', url: 'https://fakestoreapi.com/products', redirected: false, status: 200, ok: true, …}
        const json = await response.json() // it will return you an object with a new id as {id: 21}
        // alert(`The new id is ${json.id}`)
    }

    render() {
        return (
            <div className="mt-4 w-100">
                <form className={"form-control p-2"}>
                    <div className="mb-3">
                        Title
                        <input type="text" className="form-control" name="title"
                               onChange={this.handleEachInputToInputsArray}/>
                    </div>
                    <div className="mb-3">
                        Price
                        <input type="number" className="form-control" name="price"
                               onChange={this.handleEachInputToInputsArray}/>
                    </div>
                    <div className="mb-3">
                        Description
                        <input type="text" className="form-control" name="description"
                               onChange={this.handleEachInputToInputsArray}/>
                    </div>
                    <div className="mb-3">
                        Image Url
                        <input type="text" className="form-control" name="image"
                               onChange={this.handleEachInputToInputsArray}/>
                    </div>
                    <div className="mb-3">
                        Category
                        <input type="text" className="form-control" name="category"
                               onChange={this.handleEachInputToInputsArray}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleRequestPostMethod}>Submit</button>
                </form>
            </div>
        )
    }
}