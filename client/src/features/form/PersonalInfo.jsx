import { Link } from "react-router-dom";
import './formStep.css';

const PersonalInfo = () => {
    return (
        <>
            <h2>Personal Info</h2>
            <Link to='/plan'>Next</Link>
        </>
    );
}
 
export default PersonalInfo;