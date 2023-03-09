import React, {useState} from 'react'
import Button from "../../components/button/Button"
import Layout from "../../components/layout/Layout"
import ContentImg from '../../assets/funny.png'
import HelloImg from '../../assets/hello.png'
import Stickers from '../../components/stickers/Stickers'
import { useNavigate } from 'react-router-dom'
import Reviews from '../../components/reviews/Reviews'
import Disclaimer from '../../components/disclaimer/Disclaimer'
import PhoneIcon from '../../assets/phone-icon.png'
import  getPin from "../api/getPin";
import { generateRandomString } from '../../utils/utils';
import "./Funny.scss"

function Funny({userId, setUserId}) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/pin'; 
      navigate(path);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setUserId(generateRandomString(10))
        const result = await getPin(phoneNumber, userId);

        if (result.success) {
            setIsLoading(false);
            routeChange()
            
        } else {
            setIsLoading(false);
            console.error("Error submitting phone number:", result.error);
            alert("Input valid phone number, please try again.");
        }
   };

      
  return (
    <div className='funny'>     
        <Layout>
            <div className='section-container'>
                <div className='content-container'>
                    <div className='content-img-container'>
                        <img src={ContentImg} alt="content-monster" className='content-img'/>
                    </div>
              
                    <div className='content'>
                        <div className='title'>
                            <p>You've got good sense of humour</p>  
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="phone">Enter your number to get all the sticker packs. </label>
                            <div className="input-group">
                                <span className="input-icon">
                                    <img src={PhoneIcon} alt="" />
                                </span>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="phone" 
                                    name="phone" 
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder=""
                                    required
                                    />
                            </div>
                            <div className='btn-container'>
                                <Button title="Submit to Subscribe" loading={isLoading}/>
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

export default Funny
