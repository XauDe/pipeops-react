import security_shield from "../images/security_shield.svg"
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Authentication = () => {
    return (
        <div className="bubbles_bg">
            <div className="authenticate container">
                <h2 className="fw-700 text-center">Set up two-step verification</h2>
                <p>Please enter the mobile number linked to your device. A verification code would be sent to you when you sign in</p>
                <form>
                    <div className="d-flex">
                        <Input name="text" label="Country code" placeholder="+234" width="w-30"/>
                        <Input name="number" label="Phone number" placeholder="000 000 0000" width="w-70"/>
                    </div>
                    <div className="d-flex security">
                        <img alt="Security Shield" src={security_shield}/>
                        <p className="m-0">Your security is very important to us at safe tra, hence we should send you a verification code each time you log into your device.</p>
                    </div>
                    <Button name="Send code"/>
                </form>
                <div className="text-center fw-700"><Link to="/login">Sign out</Link></div>
            </div>
        </div>
    );
}

export default Authentication;