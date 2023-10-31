import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addUser } from "../redux/userReducer"
import { useDispatch, useSelector } from "react-redux"

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [references, setReferences] = useState(['']);


    const handlesubmit = (e) => {
        e.preventDefault();
        if (checkuser()) {
            alert("Email or Phone no. is already registered please fill another");
        }
        else {
            dispatch(addUser({ name, email, phone ,references}));
            navigate("/listpage");
        }

    }
    const checkuser = () => {
        return users.find((obj) => {
            if (obj.email == email || obj.phone == phone) {
                return true;
            }
            else {
                return false;
            }
        })
    }

    const handlerefChange = (index, value) => {
        const newReferences = [...references];
        newReferences[index] = value;
        setReferences(newReferences);
    };

    const handleAddRef = () => {
        const newReferences=[...references];
        newReferences.push('');
        setReferences(newReferences);
    };

    const handleDeleteRef = (index) => {
        const newReferences = [...references];
        newReferences.splice(index, 1);
        setReferences(newReferences);
    };

    return (<>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Registeration Form</h3>
                <form className="mb-3" onSubmit={handlesubmit}>
                    <div className="form-gourp">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="Enter Name" className="form-control" />
                    </div>
                    <div className="form-gourp">
                        <label>Email:</label>
                        <input type="email" required value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Email" className="form-control" />
                    </div>
                    <div className="form-gourp">
                        <label>Phone:</label>
                        <input type="phone" required value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder="Enter Phone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Reference:</label>
                        {references.map((ref, index) => (
                            index < 10 && <>

                                <div key={index} className="form-group d-flex align-items-center  mb-3">
                                    <input
                                        type="text"
                                        value={ref}
                                        onChange={(e) => handlerefChange(index, e.target.value)}
                                        placeholder="Enter Reference"
                                        className="form-control mr-2"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-primary me-2"
                                        onClick={handleAddRef}
                                    >
                                        Add
                                    </button>

                                    {
                                        index > 0 && <button
                                            type="button"
                                            className="btn btn-danger me-2"
                                            onClick={() => handleDeleteRef(index)}
                                        >
                                            Delete
                                        </button>
                                    }
                                </div></>
                        ))}
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>

            </div>
        </div>

    </>)
}