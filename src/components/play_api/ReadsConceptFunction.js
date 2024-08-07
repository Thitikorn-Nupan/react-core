import {useEffect, useState} from "react";

export const ReadsConceptFunction = () => {
    // Note when you call setState # React รู้ว่า state ได้เปลี่ยนแปลงและต้องทำการรีเรนเดอร์ component ใหม่ทุกครั้ง
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [option, setOption] = useState();
    let checkUsersExist, checkProductsExist

    const fakeStoreApi = [
        "https://fakestoreapi.com/users?limit=5",
        "https://fakestoreapi.com/products?limit=5"
    ]

    const fetchData = async (url) => {
        // โค้ดที่ต้องการให้ทำงานเมื่อเกิด side effect
        try {
            // The Fetch API is a modern interface for making HTTP requests in the browser. It provides a more powerful and flexible way to handle network requests compared to older techniques like XMLHttpRequest.
            const response = await fetch(url);
            const result = await response.json();
            if (url === fakeStoreApi[0]) {
                setUsers(result);
            }
            if (url === fakeStoreApi[1]) {
                setProducts(result)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect จะถูกเรียกหลังจาก component ถูก render และหลังจากทุกครั้งที่ state หรือ props มีการเปลี่ยนแปลงค่า
    // it works once time when component is render
    useEffect(() => {
        console.log('useEffect() is initial')
        fetchData(fakeStoreApi[0]);
        fetchData(fakeStoreApi[1]);
        return () => {
            console.log('ReadsConceptFunction component is unmounted.');
        }
    }, []);


    const handleChangeOption = (event) => {
        setOption(event.target.value)
    }


    switch (option) {
        case "1":
            checkUsersExist = true
            break;
        case "2":
            checkProductsExist = true
            break;
        default:
            break
    }
    return (
        <>
            <div className={"container mt-4 w-50"}>
                <div className={"container w-25"} style={{marginLeft: "200px"}}>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="radio"
                               name="option"
                               value="1"
                               onChange={handleChangeOption}
                        />
                        <label className="form-check-label">
                            Reads Users
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="radio"
                               name="option"
                               value="2"
                               onChange={handleChangeOption}
                        />
                        <label className="form-check-label">
                            Reads Products
                        </label>
                    </div>

                </div>
                {checkUsersExist && <UsersTable users={users}/>}
                {checkProductsExist && <ProductsTable products={products}/>}
            </div>
        </>
    )
}

// **** props works as props on class
// **** You call and can pass props as <UsersTable <key>={<value>} />
const UsersTable = props => {
    return (
        <table className="table mt-3 w-75" style={{margin: "0 auto"}}>
            <thead className="table table-secondary">
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {
                props.users.map(
                    (user) => (
                        // if I called by this.handle2OnRowClick ** student will be undefined
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))
            }
            </tbody>
        </table>
    )
}


const ProductsTable = props => {
    return (
        <>
            <div>
                <table className="table mt-3 w-100" style={{margin: "0 auto"}}>
                    <thead className="table table-secondary">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.products.map(
                            (product) => (
                                // if I called by this.handle2OnRowClick ** student will be undefined
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <img width={60} src={product.image}/>
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