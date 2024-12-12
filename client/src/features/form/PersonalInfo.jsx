import { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitUserInfo } from './state/slice.js';
import Navigation from "./Navigation";
import './formStep.css';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.form.user);

    const [isMissingName, setIsMissingName] = useState(false);
    const [isMissingEmail, setIsMissingEmail] = useState(false);
    const [isMissingPhone, setIsMissingPhone] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const checkFields = () => {
        nameRef.current.value.length === 0 ? setIsMissingName(true) : setIsMissingName(false);
        emailRef.current.value.length === 0 ? setIsMissingEmail(true) : setIsMissingEmail(false);
        phoneRef.current.value.length === 0 ? setIsMissingPhone(true) : setIsMissingPhone(false);
    };

    const submitData = () => {
        if (nameRef.current.value.length === 0 || emailRef.current.value.length === 0 || phoneRef.current.value.length === 0) return;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        dispatch(submitUserInfo({name, email, phone}));
        navigate('/plan');
    };

    const handleNextButtonClick = () => {
        checkFields();
        submitData();
    };
    
    return (
        <>
            <div className="mainFormContainer">
                <Navigation step={1} />
                <div className="formContentContainer">
                    <div className="formHeaderContainer">
                        <h2>Personal Info</h2>
                        <h4>Please provide your name, email address, and phone number.</h4>
                    </div>
                    <div className="formFieldsContainer">
                        <div className={isMissingName ? 'alertLableContainer' : 'lableContainer'}>
                            <p className='textInputLable'>Name</p>
                            {
                                isMissingName
                                ?
                                <p className="alertLable">This field is required</p>
                                :
                                ''
                            }
                        </div>
                        <input ref={nameRef} defaultValue={user.name} className='textInput' type="text" name="name" placeholder='e.g. Stephen King' />
                        <div className={isMissingEmail ? 'alertLableContainer' : 'lableContainer'}>
                            <p className='textInputLable'>Email</p>
                            {
                                isMissingEmail
                                ?
                                <p className="alertLable">Valid email is required</p>
                                :
                                ''
                            }
                        </div>
                        <input ref={emailRef} defaultValue={user.email} className='textInput' type="text" name="email" placeholder='e.g. stephenking@lorem.com' />
                        <div className={isMissingPhone ? 'alertLableContainer' : 'lableContainer'}>
                            <p className='textInputLable'>Phone</p>
                            {
                                isMissingPhone
                                ?
                                <p className="alertLable">This field is required</p>
                                :
                                ''
                            }
                        </div>
                        <input ref={phoneRef} defaultValue={user.phone} className='textInput' type="text" name="phone" placeholder='e.g. +1 234 567 890' />
                    </div>
                    <div className="formControlsContainer">
                        <button onClick={handleNextButtonClick} className='nextButton'>Next</button>                        
                    </div>
                </div>
            </div> 
        </>
    );
}
 
export default PersonalInfo;