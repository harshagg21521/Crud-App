import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";

export const Edit =()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {id}=useParams();
    const users=useSelector((state)=>state.users);
    const [name,setname]=useState(users[id]?.name);
    const [email,setemail]=useState(users[id]?.email);
    const [phone,setphone]=useState(users[id]?.phone);
    const [ref,setRef]=useState(users[id]?.references.length==0?[""]:users[id]?.references);

    const handleupdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name: name,
            email:email,
            phone:phone,
            references:ref
        }));
        navigate("/listpage");
    }

    const handleRefChange = (index, value) => {
        const newReferences = [...ref];
        newReferences[index] = value;
        setRef(newReferences);
    };

    const handleAddRef = () => {
        const newReferences=[...ref];
        newReferences.push('');
        setRef(newReferences);
      };

    const handleDeleteRef = (index) => {
        const newReferences = [...ref];
        newReferences.splice(index, 1);
        setRef(newReferences);
    };
    return(<>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update Form</h3>
                <form className="mb-3" onSubmit={handleupdate}>
                    
                    <div className="form-gourp">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" className="form-control" />
                    </div>
                    <div className="form-gourp">
                        <label>Email:</label>
                        <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" className="form-control" />
                    </div>
                    <div className="form-gourp">
                        <label>Phone:</label>
                        <input type="phone" required value={phone} onChange={(e)=>setphone(e.target.value)} placeholder="Enter Phone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Reference:</label>
                        {ref.map((ref, index) => (
                            index < 10 && <>

                                <div key={index} className="form-group d-flex align-items-center  mb-3">
                                    <input
                                        type="text"
                                        value={ref}
                                        onChange={(e) => handleRefChange(index, e.target.value)}
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
                                </div>
                                </>
                            ))}
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>

            </div>
        </div>

    </>);
}