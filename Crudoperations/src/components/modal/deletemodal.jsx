
import { deleteUser } from "../../redux/userReducer";
import { useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
export const DelModal=(props)=>{
    const dispatch=useDispatch();

    const handledelete = (e) => {
        e.preventDefault();
        dispatch(deleteUser({
            id: props.index
        }));
        props.onHide();
    }
    
    
    return (<>
    <div>
                <Modal centered show={props.show} onHide={props.onHide}>
                    <Modal.Header>
                        <Modal.Title>Are you sure you want to delete ?</Modal.Title>
                    </Modal.Header>
                   
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={handledelete}>
                            Yes
                        </button>
                        <button className="btn btn-danger" onClick={props.onHide}>
                            No
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
    </>)
}