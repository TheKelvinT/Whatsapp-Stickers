import React,{useRef,useEffect,useState} from 'react'
import Button from "../../components/button/Button"
import Layout from "../../components/layout/Layout"
import ContentImg from '../../assets/pin.png'
import Stickers from '../../components/stickers/Stickers'
import "./Pin.scss"
import Reviews from '../../components/reviews/Reviews'
import Disclaimer from '../../components/disclaimer/Disclaimer'
import { useNavigate } from 'react-router-dom'
import verifyPin from '../api/verifyPin'

function Pin({userId}) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [pin, setPin] = useState(['', '', '', '']);
    const pinInputs = useRef([]);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/thankyou'; 
      navigate(path);
    }

    const handlePinChange = (index, value) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
        if (value && index < pinInputs.current.length - 1) {
          pinInputs.current[index + 1].focus();
        }
      };

      useEffect(() => {
        pinInputs.current[0].focus();
      }, []);

    const handleKeyUp = (index, event) => {
        if (event.key === 'Backspace' && !pin[index]) {
          if (index > 0) {
            pinInputs.current[index - 1].focus();
          }
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const pinString = pin.join('');
        try {
          setLoading(true);
          const data = await verifyPin(pinString, userId);
          setLoading(false);
          setSuccess(data.success);
          routeChange();
        } catch (error) {
          setLoading(false);
          console.log(error)
          setError(error.message);
          alert('Please enter correct PIN');
          setPin(['', '', '', ''])
        }
      };

  return (
    <div className='pin'>         
        <Layout>   
            <div className='section-container'>
                <div className='content-container'>
                    <img src={ContentImg} alt="content-monster" className='content-img'/>
                    <div className='content'>
                        <div className='title'>
                            <p>The sticker packs is ready!</p>
                        </div>
                        <div className='description'>
                            <p>We've sent you a <span>4 digit code</span></p>
                            <p> please enter it below to confirm subscription!</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='pin-container'>
                                {pin.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        className="pin-box"
                                        maxLength={1}
                                        value={value}
                                        ref={(input) => (pinInputs.current[index] = input)}
                                        onChange={(event) => handlePinChange(index, event.target.value)}
                                        onKeyUp={(event) => handleKeyUp(index, event)}
                                    />
                                ))}
                            </div>
                            <div className='btn-container'>
                                <Button title="Confirm" loading={loading}/>
                            </div>
                        </form>
                    </div>
                </div>
                <Stickers/>
                <Reviews/>
                <Disclaimer/>
            </div>
        </Layout>
    </div>
  )
}

export default Pin
