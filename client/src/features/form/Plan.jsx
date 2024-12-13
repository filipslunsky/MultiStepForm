import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitPlanInfo } from './state/slice.js';
import Navigation from "./Navigation";
import arcadeIcon from '../../assets/img/icon-arcade.svg';
import advancedIcon from '../../assets/img/icon-advanced.svg';
import proIcon from '../../assets/img/icon-pro.svg';
import './formStep.css';

const Plan = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const plan = useSelector(state => state.form.plan);

    const [selectedPlan, setSelectedPlan] = useState(plan.plan);
    const [selectedYearly, setSelectedYearly] = useState(plan.yearly);

    const handleSelctArcade = () => {
        setSelectedPlan('Arcade');
    };

    const handleSelectAdvanced = () => {
        setSelectedPlan('Advanced');
    };

    const handleSelectPro = () => {
        setSelectedPlan('Pro');
    };

    const handleSelectYearly = () => {
        setSelectedYearly(!selectedYearly);
    };

    const submitData = () => {
        dispatch(submitPlanInfo({plan: selectedPlan, yearly: selectedYearly}));
    };

    const handleBackButtonClick = () => {
        navigate('/personal');
    };

    const handleNextButtonClick = () => {
        submitData();
        navigate('/addons');
    };

    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={2} />
                <div className="formContentContainer">
                    <div className="formHeaderContainer">
                        <h2 className='formTitle'>Select your plan</h2>
                        <h4 className='formInstruction'>You have the option of monthly or yearly billing.</h4>
                    </div>
                    <div className="formFieldsContainer">
                        <div className="planItemsContainer">
                            <div
                            onClick={handleSelctArcade}
                            className={selectedPlan === "Arcade" ? "planItem selectedPlanItem" : "planItem"}
                            >
                                <img className='planIcon' src={arcadeIcon} alt="arcade icon" />
                                <h5 className='planName'>Arcade</h5>
                                {
                                    selectedYearly
                                    ?
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$90/yr'</p>
                                        <p className='planPriceDiscount'>2 months free</p>
                                    </div>
                                    :
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$9/mo'</p>
                                    </div>
                                }
                            </div>
                            <div
                            onClick={handleSelectAdvanced}
                            className={selectedPlan === "Advanced" ? "planItem selectedPlanItem" : "planItem"}
                            >
                                <img className='planIcon' src={advancedIcon} alt="advanced icon" />
                                <h5 className='planName'>Advanced</h5>
                                {
                                    selectedYearly
                                    ?
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$120/yr'</p>
                                        <p className='planPriceDiscount'>2 months free</p>
                                    </div>
                                    :
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$12/mo'</p>
                                    </div>
                                }
                            </div>
                            <div
                            onClick={handleSelectPro}
                            className={selectedPlan === "Pro" ? "planItem selectedPlanItem" : "planItem"}
                            >
                                <img className='planIcon' src={proIcon} alt="pro icon" />
                                <h5 className='planName'>Pro</h5>
                                {
                                    selectedYearly
                                    ?
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$150/yr'</p>
                                        <p className='planPriceDiscount'>2 months free</p>
                                    </div>
                                    :
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$15/mo'</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="periodSwitchContainer">
                            <span className="planPeriodMonthly">Monthly</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={selectedYearly}
                                    onChange={handleSelectYearly}
                                />
                                <span className="slider"></span>
                            </label>
                            <span className="planPeriodYearly">Yearly</span>
                        </div>
                    </div>
                    <div className="formControlsContainer">
                        <button onClick={handleBackButtonClick} className="backButton">Go Back</button>
                        <button onClick={handleNextButtonClick} className="nextButton">Next Step</button>
                    </div>
                </div>
            </div>  
        </>
    );
}
 
export default Plan;