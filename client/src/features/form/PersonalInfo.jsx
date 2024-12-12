import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './formStep.css';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.form.user);
    console.log(user);
    
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
            <h2>Personal Info</h2>
            <Link to='/plan'>Next</Link>
        </>
    );
}
 
export default PersonalInfo;