import Button from "../components/Button";
import Input from "../components/Input";

const Verification = () => {
    return (
        <div className="bubbles_bg">
            <div className="verify container">
                <h2 className="fw-700 text-center">Enter code</h2>
                <p>Please enter your two-step-verification code here to access your account.</p>
                <div className="d-flex">
                    <Input name="number"/>
                    <Input name="number"/>
                    <Input name="number"/>
                    <Input name="number"/>
                </div>
                <Button name="Verify"/>
            </div>
        </div>
    );
}

export default Verification;