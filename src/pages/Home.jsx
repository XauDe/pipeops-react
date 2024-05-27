import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Accordion from '../components/Accordion';
import SliderSection from '../components/SliderSection'
import {howItWorks, services, reviews, faqs} from '../data/data';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextReview = () => {
        const nextIndex = (currentIndex + 1) % reviews.length;
        setCurrentIndex(nextIndex);
    }
    const prevReview = () => {
        const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        setCurrentIndex(prevIndex);
    }

    const review = reviews[currentIndex];
    const brandElements = ['brand', 'jiji', 'iStore', 'jumia','amazon', 'brand2'].map(brand => <img src={require(`../images/${brand}.svg`)} alt={`${brand} Logo`}/>);
    const howItWorkElements = howItWorks.map(props => <div key={props.id}> <img src={require(`../images/${props.img}.svg`)} alt={props.img}/> <p><span className='fw-700'>{props.id}.</span> {props.text}</p> </div>);    
    const seviceElements = services.map(service => <div key={service.id}> <div className='d-flex align-end'><img src={require(`../images/${service.img}.svg`)} alt={service.img}/> <h3 className='m-0'>{service.heading}</h3></div> <p>{service.text}</p> <Link className='fw-700' to="">Learn More</Link></div>);    
    
    return(
    <>
        <Header />
        <section className='hero_section pink_overlay text-balance'>
            <div className='container d-flex justify-between'>
                <div className='col'>
                    <h1 className='m-0'>Never buy or sell online without using safeTra</h1>
                    <p>With safeTra you can buy and sell anything safely without any risks. Peace of mind at last!</p>
                    <Link to='/signup' className='btn btn-primary'>Get Started</Link>
                </div>
                <div className='col'>
                    <SliderSection/>

                    {/* <div className='hero_circle'>
                        <img src={require("../images/hero_car.svg").default} alt='Buy & Sell Cars' className='hero_car'/>
                        <p className='fw-700'>Buy or sell your vehicle safely and confidently</p>                            
                    </div>
                    <div className='hero_card'>
                        <ul>
                            <li><i className='fa-regular fa-circle-check'></i>Buyer & Seller agree on terms</li>
                            <li><i className='fa-regular fa-circle-check'></i>Buyer pays safeTra</li>
                            <li><i className='fa-regular fa-circle-check'></i>Seller ships the car</li>
                            <li><i className='fa-regular fa-circle-check'></i>Buyer inspects & approve</li>
                            <li><i className='fa-regular fa-circle-check'></i>safeTra pays the seller</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
        <section id='how-it-works' className='container text-center'>
            <h2>Over N3 million of transactions <br/> protected with safeTra</h2>
            <p className='text-balance'>safeTra is the world’s most secure payment method from a counterparty risk perspective - safeguarding both buyer and seller, all funds transacted using safeTra are kept in trust.</p>
            <div className='d-grid'>
                {howItWorkElements}
            </div>
        </section>
        <section id='services'>
            <div className='container'>
                <h2 className='text-center'>Safely buy and sell wide range of products <br/> and services with safeTra</h2>
                <div className='d-grid'>
                    {seviceElements}
                </div>
            </div>
        </section>
        <section className='brands pink_overlay'>
            <div className='container text-center'>
                <h2>The recommended payment system by top <br/> eCommerce companies</h2>
                <p>safeTra is the recommended payment system of top eCommerce companies. Talk to us about signing up today.</p>
                <div className='d-flex justify-between'>
                    {brandElements}
                </div>
            </div>
        </section>
        <section className='reviews container text-center'>
            <h2>Don’t Take Our Word For It</h2>
            <p>Here's what our satisfied users have to say about our escrow application.</p>
            <Slider review={review} prevSlider={prevReview} nextSlider={nextReview} />
        </section>
        <section className="container" id='faqs'>
            <h2 className='m-0 text-center'>Frequently Asked Questions</h2>
            <div className="questions">
                {faqs.map((faq, index) => <Accordion key={faq.id} isActive={activeIndex === index} handleClick={() => handleClick(index)} faq={faq}/>)}            
            </div>
        </section>
        <Footer/>
    </>
    )
}

export default Home;