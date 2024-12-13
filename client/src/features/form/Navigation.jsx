import './navigation.css';

const Navigation = ({step}) => {
    const stepNumberArr = [1, 2, 3, 4];
    const stepDescArr = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
    
    return (
        <>
            <div className="navigationContainer">
                {
                    stepNumberArr.map((item, index) => {
                        return (
                            <div key={index} className="navigationStepContainer">
                                <div className={item === step ? 'stepNumberContainer activeStep' : 'stepNumberContainer'}>
                                    {item}
                                </div>
                                <div className="stepDescriptionContainer">
                                    <h4 className='stepDescriptionName'>STEP {item}</h4>
                                    <p className='stepDescriptionValue'>{stepDescArr[index]}</p>                            
                                </div>
                            </div>
                        )
                    })
                } 
            </div>
        </>
    );
}
 
export default Navigation;