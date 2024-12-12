import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import './formStep.css';

const Plan = () => {
    const dispatch = useDispatch();
    const plan = useSelector(state => state.form.plan);
    console.log(plan);
    

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
                        <Link to='/personal'>Go Back</Link>
                        <Link to='/addons'>Next</Link>
                    </div>
                </div>
            </div>   
        </>
    );
}
 
export default Plan;