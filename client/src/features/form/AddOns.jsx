import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './formStep.css';

const AddOns = () => {
    return (
        <>
            <h2>Pick add-ons</h2>
            <Link to='/plan'>Go Back</Link>
            <Link to='/summary'>Next</Link>
        </>
    );
}
 
export default AddOns;