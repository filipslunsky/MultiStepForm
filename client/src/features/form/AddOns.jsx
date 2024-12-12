import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitAddOnsInfo } from './state/slice.js';
import Navigation from "./Navigation";
import './formStep.css';

const AddOns = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addOns = useSelector(state => state.form.addOns);
    console.log(addOns);
    
    const handleBackButtonClick = () => {
        navigate('/plan');
    };

    const handleNextButtonClick = () => {
        navigate('/summary');
    };

    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={3} />
                <div className="formContentContainer">
                    <div className="formHeaderContainer">
                        <h2>Pick add-ons</h2>
                        <h4>Add-ons help enhance your gaming experience.</h4>
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
 
export default AddOns;