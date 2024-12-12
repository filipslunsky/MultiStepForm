import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import './formStep.css';

const AddOns = () => {
    const dispatch = useDispatch();
    const addOns = useSelector(state => state.form.addOns);
    console.log(addOns);
    

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
                        <Link to='/plan'>Go Back</Link>
                        <Link to='/summary'>Next</Link>
                    </div>
                </div>
            </div>   
        </>
    );
}
 
export default AddOns;