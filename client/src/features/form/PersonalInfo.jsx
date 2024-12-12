import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import './formStep.css';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.form.user);
    console.log(user);
    
    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={1} />
                <div className="formContentContainer">
                    <div className="formHeaderContainer">
                        <h2>Personal Info</h2>
                        <h4>Please provide your name, email address, and phone number.</h4>
                    </div>
                    <div className="formFieldsContainer">
    
                    </div>
                    <div className="formControlsContainer">
                        <Link to='/plan'>Next</Link>
                    </div>
                </div>
            </div> 
        </>
    );
}
 
export default PersonalInfo;