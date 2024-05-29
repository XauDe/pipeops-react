import { useState, useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [menu, setMenu] = useState(true);
    const handleMenu = () => setMenu(menu => !menu);

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);

    const handleScroll = () => {
        const heroHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > heroHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header ref={headerRef} className={`header ${isSticky ? 'sticky' : ''}`}>
            <div className='container'>
                    <nav className='d-flex justify-between'>
                        <div className='d-flex justify-between'>
                            <Link to="/"><img alt='Logo Icon' src={require('../images/logo.svg').default}/></Link>                
                            <img alt='Menu Icon' className='menu' onClick={handleMenu} src={require(`../images/icon-${menu ? 'menu' : 'close'}.svg`)}/>
                        </div>                
                        <ul className={`nav_list d-flex ${menu ? 'disable' : ''}`}>
                            <li className='nav_item'> <Link to="/" className='nav_link active'>Home</Link></li>
                            <li className='nav_item'> <Link to="/about" className='nav_link'>About</Link></li>
                            <li className='nav_item'> <HashLink to="/#services" className='nav_link'>Services</HashLink></li>
                            <li className='nav_item'> <HashLink to="/#how-it-works" className='nav_link'>How It Works</HashLink></li>
                            <li className='nav_item'> <HashLink to="/#faqs" className='nav_link'>FAQs</HashLink></li>
                        </ul>
                        <ul className={`nav_list d-flex ${menu ? 'disable' : ''}`}>                            
                            <li className='nav_item'><Link to='/login' className='btn btn-outline'>Sign In</Link></li>
                            <li className='nav_item'><Link to='/signup' className='btn btn-primary'>Join for Free</Link></li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header;