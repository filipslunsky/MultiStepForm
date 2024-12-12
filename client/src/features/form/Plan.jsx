import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './formStep.css';

const Plan = () => {
    const dispatch = useDispatch();
    const plan = useSelector(state => state.form.plan);
    console.log(plan);
    

    return (
        <>
            <div className="mainFormContainer">
                <div className="navigationContainer">
                    <div className="navigationStepContainer">
                        <div className="stepDescriptionContainer">                            
                        </div>
                    </div>
                    <div className="navigationStepContainer">
                        <div className="stepDescriptionContainer">                            
                        </div>
                    </div>
                    <div className="navigationStepContainer">
                        <div className="stepDescriptionContainer">                            
                        </div>
                    </div>
                    <div className="navigationStepContainer">
                        <div className="stepDescriptionContainer">                            
                        </div>
                    </div>
                </div>
                <div className="formContentContainer">
                    <div className="formFieldsContainer">
    
                    </div>
                    <div className="formControlsContainer">
                        
                    </div>
                </div>
            </div>
            <h2>Select your plan</h2>
            <Link to='/personal'>Go Back</Link>
            <Link to='/addons'>Next</Link>
        </>
    );
}
 
export default Plan;