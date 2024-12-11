import { Link } from "react-router-dom";
import './formStep.css';

const Plan = () => {
    return (
        <>
            <h2>Select your plan</h2>
            <Link to='/personal'>Go Back</Link>
            <Link to='/addons'>Next</Link>
        </>
    );
}
 
export default Plan;