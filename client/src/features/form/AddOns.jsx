import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './formStep.css';

const AddOns = () => {
    const dispatch = useDispatch();
    const addOns = useSelector(state => state.form.addOns);
    console.log(addOns);
    

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
            <h2>Pick add-ons</h2>
            <Link to='/plan'>Go Back</Link>
            <Link to='/summary'>Next</Link>
        </>
    );
}
 
export default AddOns;