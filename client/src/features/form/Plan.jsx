import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitPlanInfo } from './state/slice.js';
import Navigation from "./Navigation";
import './formStep.css';

const Plan = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const plan = useSelector(state => state.form.plan);
    console.log(plan);

    const handleBackButtonClick = () => {
        navigate('/personal');
    };

    const handleNextButtonClick = () => {
        navigate('/addons');
    };

    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={2} />
                <div className="formContentContainer">
                    <div className="formHeaderContainer">
                        <h2>Select your plan</h2>
                        <h4>You have the option of monthly or yearly billing.</h4>
                    </div>
                    <div className="formFieldsContainer">
    
                    </div>
                    <div className="formControlsContainer">
                        <button onClick={handleBackButtonClick} className="backButton">Go Back</button>
                        <button onClick={handleNextButtonClick} className="nextButton">Next</button>
                    </div>
                </div>
            </div>   
        </>
    );
}
 
export default Plan;