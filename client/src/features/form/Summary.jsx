import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './formStep.css';

const Summary = () => {
    const dispatch = useDispatch();
    const plan = useSelector(state => state.form.plan);
    const addOns = useSelector(state => state.form.addOns);

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
            <h2>Finishing up</h2>
            <Link to='/addons'>Go Back</Link>
            <button>Confirm</button>
        </>
    );
}
 
export default Summary;