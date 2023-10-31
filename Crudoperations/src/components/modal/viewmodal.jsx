import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateRef } from '../../redux/userReducer';

const ViewModal = (props) => {

    const dispatch=useDispatch();
    const users = useSelector((state) => state.users);
    
    const [ref, setRef] = useState(users[props.index]?.references);

    const handleDeleteRef = (e,index) => {
        e.preventDefault();
        const newReferences = [...ref];
        newReferences.splice(index, 1);
        setRef(newReferences);
        dispatch(updateRef({
            id:props.index,
            references:newReferences
        }));
        console.log(ref);
    };

    return (
        <>
            <div>
                
                <Modal centered show={props.refshow} onHide={props.onHide}>
                    <Modal.Header>
                        <Modal.Title>References</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ol className="text-decoration-none">
                            {ref?.map((ref, index) => {
                                
                                return (
                                    
                                    <div className="d-flex justify-content-around border border-dark p-1 m-3 rounded-5 bg-light">
                                        <li key={index} className="fs-5 mr-2">{ref}</li>
                                        <button
                                            onClick={(e) => {
                                                handleDeleteRef(e,index);
                                            }}
                                            className="btn btn-sm btn-danger rounded-circle"
                                        >
                                            X
                                        </button>
                                    </div>
                                );
                            })}
                        </ol>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};
export default ViewModal