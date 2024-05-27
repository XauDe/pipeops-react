const Accordion = ({faq, handleClick, isActive}) => {
    return(
    <>
        <ul className="question"> 
            <li className="question__heading d-flex fw-700 justify-between" onClick={handleClick}>
                {faq.question} 
                <img src={require(`../images/icon-${isActive ? 'minus' : 'plus'}.svg`)} alt={`Icon ${isActive ? 'minus' : 'plus'}`}/>
            </li>
            <li className={`answer ${isActive ? 'visible' : ''}`}>{faq.answer}</li> 
        </ul>
    </>
    )
}

export default Accordion;