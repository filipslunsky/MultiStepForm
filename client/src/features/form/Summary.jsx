import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import './formStep.css';

const Summary = () => {
    const dispatch = useDispatch();
    const plan = useSelector(state => state.form.plan);
    const addOns = useSelector(state => state.form.addOns);
    console.log(plan);
    console.log(addOns);
    
    

    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={4} />
                <div className="formContentContainer">
                    <div className="formHeaderContainer">
                        <h2>Finishing up</h2>
                        <h4>Double-check everything looks OK before confirming.</h4>
                    </div>
                    <div className="formFieldsContainer">
    
                    </div>
                    <div className="formControlsContainer">
                        <Link to='/addons'>Go Back</Link>
                        <button>Confirm</button>
                    </div>
                </div>
            </div>     
        </>
    );
}
 
export default Summary;