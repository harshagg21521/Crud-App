import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DelModal } from "./modal/deletemodal";
import  ViewModal  from "./modal/viewmodal";


export const ListPage = () => {
    const [userindex, setuserindex] = useState("");
    const [show, setShow] = useState(false);
    const [showref, setshowref] = useState(false);
    const [refindex, setrefindex] = useState("");
    const users = useSelector((state) => state.users);

    const handlerefshow = (index, e) => {
        e.preventDefault();
        setrefindex(index);
        setshowref(true);
        
    };

    const handleShow = (id) => {
        setuserindex(id);
        setShow(true);
    };



    return (<>
        <div className="container">
            <h2>List Page</h2>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                        <td>REFERNCES</td>
                        <td>ACTIONS</td>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={(e) => handlerefshow(index, e)} className="btn btn-sm btn-secondary">view</button></td>
                            <td>
                                <Link to={"/listpage/edit/" + (index)} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => handleShow(index)} className="btn btn-sm btn-danger ms-2">Delete</button>

                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            {showref &&   <ViewModal index={refindex} refshow={showref} onHide={() => { setshowref(false) }} />}


           {show &&  <DelModal index={userindex} show={show} onHide={() => { setShow(false) }} />}
        </div>


    </>)
}