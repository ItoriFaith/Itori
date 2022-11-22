import React from 'react'
import './aboutus.css'
import { FaCommentDollar} from "react-icons/fa";

const Aboutus = () =>{
    return(
        <div className= 'about'>
        <div>
            <h2>We are the Itori</h2>
            <h4>Providing you with fastest decluttering services</h4>
            <p>At Itori we want to solve the biggest problem most households and offices are facing.<br/>Piles of unused items such as furniture,appliances,shoes,clothes.<br/> 
            According to your preference we can do a sale,<br/> a donation 
             on your behalf or both. We not only want to make your household or office most <br/>comfortable but also create jobs for the young people.We are a company the believes<br/> in team work to bring order to  your homes or offices just the way you see it fit</p>
             <h4 id= 'h3'>Itori's mission is to deliver high quality,efficient decluttering service with care.We promise:</h4>
        <li>We are a professional,people led company </li>
        <li>We empathaise and will never judge </li>
        <li>We respect your things and your decisions </li>
        <li>We make the process of decluttering positive</li>
        <li>We are efficient and will declutter at your pace</li>

        </div>
        <div>
       
            <h3>Personalized</h3>
            <p>Our team will work tirelessly<br/> to meet your unique needs</p>
            < FaCommentDollar className='icon'/>
            <h3>Budget Conscious</h3>
            <p>Customized solutions designed to fit every size,<br/> and budget maximized for your needs</p>
        </div>
        </div>
    )
}
export default Aboutus;