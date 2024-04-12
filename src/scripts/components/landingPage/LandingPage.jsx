import uniLogo from "../../../assets/uni-logo.svg";
import starLogo from "../../../assets/star.svg"
import ButtonComponent from "../../elementalComponents/buttonComponent/ButtonComponent";
import InputComponent from "../../elementalComponents/inputComponent/InputComponent";
import { useState } from "react";
import { validatePhoneNumber } from "../../../services/validationServices";

const LandingPage = () => {

    const [phoneNumber, setPhoneNumber] = useState();
    const [enableApplyButton, setEnableApplyButton] = useState(false)

    const redirect = () => {
        window.location.href = "https://paychek.uni.club/";
    }

    const handlePhoneNumberChange = (value) => {
        if (validatePhoneNumber(value)) {
            setPhoneNumber(value)

            if (value.length === 10) {
                setEnableApplyButton(true)
            } else setEnableApplyButton(false)
        }
    }

    return (
        <div className='landing-page'>
            <video className='video-bg' autoPlay loop muted>
                <source src="https://www.uni.cards/videos/nxt_wave_bg.mp4" type='video/mp4' />
            </video>

            <div className="landing-page-content">
                <header className="landing-header">
                    <img className="uni-logo" src={uniLogo} alt="uni loog" />
                    <ButtonComponent buttonText="Uni Paycheck" handleClick={redirect} />
                </header>

                <div className="content-body">
                    <div className="left-section">
                        <h1 className="main-title">
                            <span style={{fontWeight: '700'}}>NX Wave.</span> The next-gen credit card for those who love rewards.
                        </h1>

                        <h3 className="desciption">
                            1% Cashback
                            <img src={starLogo} alt="star logo" style={{width: '1rem', margin: '0 0.8rem'}} />
                            5x Rewards
                            <img src={starLogo} alt="star logo" style={{width: '1rem', margin: '0 0.8rem'}} />
                            Zero Forex Markup
                        </h3>

                        <div className="apply">
                            <InputComponent
                                name="Phone Number"
                                type="number"
                                onChange={(event) => handlePhoneNumberChange(event.target.value)}
                                value={phoneNumber}
                                placeHolder="Enter phone number"
                            />


                            <span style={{color: 'green', fontSize: '1.2rem', margin: "0 1rem"}}>{!enableApplyButton ? <span onClick={() => !enableApplyButton && setPhoneNumber("")} style={{color: 'white', cursor: 'pointer'}}>x</span> : "✓"}</span>

                            <ButtonComponent disabled={!enableApplyButton} type="input" buttonText="Apply Now" handleClick={redirect} />
                        </div>
                    </div>


                    <div className="right-section">
                        <img className="uni-card-image" src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" alt="uni-card-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;


