import React from 'react'
import Button from "../../components/button/Button"
import Layout from "../../components/layout/Layout"
import ContentImg from '../../assets/thankyou.png'
import HelloImg from '../../assets/hello.png'
import Stickers from '../../components/stickers/Stickers'

import "./ThankYou.scss"
import Reviews from '../../components/reviews/Reviews'
import Disclaimer from '../../components/disclaimer/Disclaimer'
import PhoneIcon from '../../assets/phone-icon.png'
function ThankYou() {
  return (
    <div className='thank-you'>
            
            <Layout>
            <div className='section-container'>
                <div className='content-container'>
                <div className='content-img-container'>
                <img src={ContentImg} alt="content-monster" className='content-img'/>
                </div>
              
                <div className='content'>
                    <div className='title'>
                        <p>Thank You!</p>
                       
                    </div>
                    <div className='desc'>
                        <p>Now you can express your emotions 
                            with the amazing stickers. Have fun!</p>
                    </div>
                
                    
                
                </div>
                </div>
      
                <Disclaimer/>
         

            </div>
       
          
           
           
            
    </Layout>
    </div>
  )
}

export default ThankYou
