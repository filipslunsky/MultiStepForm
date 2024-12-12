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
        setSelectedPlan('arcade');
    };

    const handleSelectAdvanced = () => {
        setSelectedPlan('advanced');
    };

    const handleSelectPro = () => {
        setSelectedPlan('pro');
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
                        <h2>Select your plan</h2>
                        <h4>You have the option of monthly or yearly billing.</h4>
                    </div>
                    <div className="formFieldsContainer">
                        <div className="planItemsContainer">
                            <div
                            onClick={handleSelctArcade}
                            className={selectedPlan === "arcade" ? "planItem selectedPlanItem" : "planItem"}
                            >
                                <img src={arcadeIcon} alt="arcade icon" />
                                <h5>Arcade</h5>
                                {
                                    selectedYearly
                                    ?
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$90/yr'</p>
                                        <p>2 months free</p>
                                    </div>
                                    :
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$9/mo'</p>
                                    </div>
                                }
                            </div>
                            <div
                            onClick={handleSelectAdvanced}
                            className={selectedPlan === "advanced" ? "planItem selectedPlanItem" : "planItem"}
                            >
                                <img src={advancedIcon} alt="advanced icon" />
                                <h5>Advanced</h5>
                                {
                                    selectedYearly
                                    ?
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$120/yr'</p>
                                        <p>2 months free</p>
                                    </div>
                                    :
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$12/mo'</p>
                                    </div>
                                }
                            </div>
                            <div
                            onClick={handleSelectPro}
                            className={selectedPlan === "pro" ? "planItem selectedPlanItem" : "planItem"}
                            >
                                <img src={proIcon} alt="pro icon" />
                                <h5>Pro</h5>
                                {
                                    selectedYearly
                                    ?
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$150/yr'</p>
                                        <p>2 months free</p>
                                    </div>
                                    :
                                    <div className="planPriceContainer">
                                        <p className="planPrice">'$15/mo'</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="periodSwitchContainer">
                            <span className="planPeriod">monthly</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={selectedYearly}
                                    onChange={handleSelectYearly}
                                />
                                <span className="slider"></span>
                            </label>
                            <span className="planPeriod">yearly</span>
                        </div>
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
 
export default Plan;