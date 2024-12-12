import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { submitForm } from './state/slice';
import Navigation from "./Navigation";
import thankYouIcon from '../../assets/img/icon-thank-you.svg';
import './formStep.css';

const Summary = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const plan = useSelector(state => state.form.plan);
    const addOns = useSelector(state => state.form.addOns);
    const submitted = useSelector(state => state.form.submitted);

    const [selectSubmitted, setSelectSubmitted] = useState(submitted);

    console.log(plan);
    console.log(addOns);
    console.log(selectSubmitted);

    const handleSubmit = () => {
        setSelectSubmitted(true);
        dispatch(submitForm({submitted: selectSubmitted}));
    };
    
    const handleBackButtonClick = () => {
        navigate('/addons');
    };

    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={4} />
                {
                    !selectSubmitted
                    ?
                    <div className="formContentContainer">
                        <div className="formHeaderContainer">
                            <h2>Finishing up</h2>
                            <h4>Double-check everything looks OK before confirming.</h4>
                        </div>
                        <div className="formFieldsContainer">
                            <div className="summaryItemsContainer">
                                <div className="summaryPlanContainer">
                                    <h3>{plan.plan}{plan.yearly ? ' (Yearly)' : ' (Monthly)'}</h3>
                                    <Link to='/plan'>Change</Link>
                                </div>
                                <h3 className='summaryPlanPrice'>
                                    ${plan.planPrice}{plan.yearly ? '0' : ''}/{plan.yearly ? 'yr' : 'mo'}
                                </h3>
                                
                            </div>
                            <div className="summaryBottomLine">

                            </div>
                        </div>
                        <div className="formControlsContainer">
                            <button onClick={handleBackButtonClick} className="backButton">Go Back</button>
                            <button onClick={handleSubmit} className="confirmButton">Confirm</button>
                        </div>
                    </div>
                    :
                    <div className="submittedContainer">
                        <img src={thankYouIcon} alt="thank you icon" />
                        <h3 className='thankTitle'>Thank you!</h3>
                        <p className='thankContent'>Thanks for confirming your subscription! We hope you have
                            fun using our platform. If you ever need support, please feel
                            free to email us at support@loremgaming.com.
                        </p>
                    </div>
                }
                
            </div>     
        </>
    );
}
 
export default Summary;