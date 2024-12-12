import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitAddOnsInfo } from './state/slice.js';
import Navigation from "./Navigation";
import './formStep.css';

const AddOns = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addOns = useSelector(state => state.form.addOns);
    const plan = useSelector(state => state.form.plan);

    const [selectedOnlineService, setSelectedOnlineService] = useState(addOns.onlineService);
    const [selectedLargerStorage, setSelectedLargerStorage] = useState(addOns.largerStorage);
    const [selectedCustomizableProfile, setSelectedCustomizableProfile] = useState(addOns.customizableProfile);

    const handleSelectOnlineService = () => {
        setSelectedOnlineService(!selectedOnlineService);
    };

    const handleSelectLargerStorage = () => {
        setSelectedLargerStorage(!selectedLargerStorage);
    };

    const handleSelectCustomizableProfile = () => {
        setSelectedCustomizableProfile(!selectedCustomizableProfile);
    };

    const submitData = () => {
        dispatch(submitAddOnsInfo({onlineService: selectedOnlineService, largerStorage: selectedLargerStorage, customizableProfile: selectedCustomizableProfile}));
    };
    
    const handleBackButtonClick = () => {
        navigate('/plan');
    };

    const handleNextButtonClick = () => {
        submitData();
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
                        <div className="addOnItemsContainer">
                            <div className="addOnItem">
                                <input
                                onChange={handleSelectOnlineService}
                                type="checkbox"
                                checked={selectedOnlineService}
                                />
                                <div className='addOnDescriptionContainer'>
                                    <h5 className='addOnTitle'>Online service</h5>
                                    <p className='addOnDescription'>Access to multiplayer games</p>
                                </div>
                                <p className='addOnPrice'>
                                    {
                                        plan.yearly
                                        ?
                                        '+$10/yr'
                                        :
                                        '+$1/mo'
                                    }
                                </p>
                            </div>
                            <div className="addOnItem">
                                <input
                                onChange={handleSelectLargerStorage}
                                type="checkbox"
                                checked={selectedLargerStorage}
                                />
                                <div className='addOnDescriptionContainer'>
                                    <h5 className='addOnTitle'>Larger storage</h5>
                                    <p className='addOnDescription'>Extra 1TB of cloud save</p>
                                </div>
                                <p className='addOnPrice'>
                                    {
                                        plan.yearly
                                        ?
                                        '+$20/yr'
                                        :
                                        '+$2/mo'
                                    }
                                </p>
                            </div>
                            <div className="addOnItem">
                                <input
                                onChange={handleSelectCustomizableProfile}
                                type="checkbox"
                                checked={selectedCustomizableProfile}
                                />
                                <div className='addOnDescriptionContainer'>
                                    <h5 className='addOnTitle'>Customizable Profile</h5>
                                    <p className='addOnDescription'>Custom theme on your profile</p>
                                </div>
                                <p className='addOnPrice'>
                                    {
                                        plan.yearly
                                        ?
                                        '+$20/yr'
                                        :
                                        '+$2/mo'
                                    }
                                </p>
                            </div>
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
 
export default AddOns;