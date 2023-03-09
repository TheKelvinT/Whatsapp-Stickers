import React from 'react'
import Button from "../../components/button/Button"
import Layout from "../../components/layout/Layout"
import ContentImg from '../../assets/content-monster.png'
import HelloImg from '../../assets/hello.png'
import Stickers from '../../components/stickers/Stickers'
import "./Prelander.scss"
import Reviews from '../../components/reviews/Reviews'
import Disclaimer from '../../components/disclaimer/Disclaimer'
import { Link } from 'react-router-dom'

function Prelander() {
  return (
    <div className='prelander'>     
        <Layout>
        <div className='relative-container'>
            <img src={HelloImg} alt="waving-monster" className='hello-img' />
            <div className='section-container'>
                <div className='content-container'>
                    
                    <img src={ContentImg} alt="content-monster" className='content-img'/>
                    <div className='content'>
                        <div className='title'>
                            <p>Express your self with</p>
                            <p><span>New </span><span className='featured-text'>Whatsapp Stickers</span></p>
                        </div>
                        <p>Choose your sticker type:</p>
                        <div className="btn-container">
                            <Link to="/funny" className='btn'>
                                <Button title="Funny"/>
                            </Link>
                            <Link to="/romance" className='btn'>
                                <Button title="Romance"/>
                            </Link>
                        </div>
                    </div>
                </div>
              
                <Stickers/>
                <Reviews/>
                <Disclaimer/>
                  </div>
            </div>
        </Layout>
    </div>
  )
}

export default Prelander
