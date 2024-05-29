 import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [menu, setMenu] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {email, username, password};
        setIsPending(true);

        fetch('https://safetra-8eek.onrender.com/api/user/register', {
            method: 'POST',
            headers: {"Content-Type": "application/type"},
            body: JSON.stringify(newUser)
        }).then(() => {setIsPending(false); navigate('/authenticate')}
        ).catch(err => {console.log(err.message);setError(err.message); navigate('/signup')})
    }
    return (
    <div className="bubbles_bg">
        <div className="container">
            <div className="d-flex justify-between">
                <Link to='/' className='_logo'><img alt="Logo Icon" src={require('../images/logo.svg').default}/></Link>
                {error && !menu && <div className="d-flex justify-between err-msg w-30">
                    <div className="d-flex">
                        <img alt="Error Icon" src={require('../images/error-icon.svg').default}/>
                        <div className="fw-700">{error}</div>
                    </div>
                    {!menu && <img alt="Close Icon" onClick={() => setMenu(!menu)} src={require('../images/icon-close-regular.svg').default} />}
                </div>}
            </div>
            <div className="signup">
                <h2 className="text-center">Join For Free</h2>
                <form className="form">
                    <div className='input d-flex flex-column align-start'>
                        <label>Email</label>
                        <input name='email' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email address' required/>
                    </div>
                    <div className='input d-flex flex-column align-start'>
                        <label>Username</label>
                        <input name='username' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter full name' required/>
                    </div>
                    <div className='input d-flex flex-column align-start'>
                        <label>Password</label>
                        <input name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password (min. 8 character)' required/>
                    </div>

                    {/* <Input label="Email" name="email" placeholder="Email address"/>
                    <Input label="Username" name="text"  placeholder=""/>
                    <Input label="Password" name="password" placeholder="Password (min. 8 character)"/> */}
                    <div className="checkbox d-flex fw-500"><input required type="checkbox"/><div>I agree to <Link to=''>Terms & Conditions</Link></div></div>
                    {!isPending && <button className="btn btn-form" type="submit" onClick={handleSubmit}>Sign In</button>}
                    {isPending && !menu && <button className="btn btn-form" type="submit" onClick={handleSubmit}>Signing In...</button>}
                    {menu && <button className="btn btn-form" type="submit" onClick={handleSubmit}>Sign In</button>}
                    <p className=" text-center">Already have an account? <Link to="/login" className="fw-700">Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Signup;