import {Component} from "react";

export class UpdateConceptClass extends Component{
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
        }
    }

    handleRequestPutMethod = async (id) => {
        console.log(this.state.inputs)
        // console.log(this.state.values[0],this.state.values[1])
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
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
        // alert(`The id ${json.id} updated`)
    }

    handleEachInputToInputsArray = (event) => {
        // **
        const name = event.target.name; // name it means we get name attribute on input tag
        // console.log(`name attribute is ${name}`)
        const value = event.target.value; // value hols as value

        // ** way to set array of state
        this.setState(preState => (
            {
                // Key : [vale each element] === [key,value]
                names : [...preState.names, name] , // optional
                values : [...preState.values, value] ,
            }
        ))

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
                    <button type="button" className="btn btn-primary" onClick={() => this.handleRequestPutMethod(7)}>Submit</button>
                </form>
            </div>
        )
    }
}