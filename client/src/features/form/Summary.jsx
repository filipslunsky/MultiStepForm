import { Link } from "react-router-dom";
import './formStep.css';

const Summary = () => {
    return (
        <>
            <h2>Finishing up</h2>
            <Link to='/addons'>Go Back</Link>
            <button>Confirm</button>
        </>
    );
}
 
export default Summary;