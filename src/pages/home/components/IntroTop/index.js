import React from 'react'
import profile from '../../../../images/IntroTop/profile.jpg';

function IntroTop() {
  return (
    <>
        <section id='introtop'>
        <div className='introtop_bg'></div>
            <div className='introtop_content'>
                <div className='introtop_content__left'>
                    <h2>PHAM THI HA GIANG</h2>
                    <p>Frontend Developer</p>
                    <ul class="introtop_list">
                        <li><i class="material-icons">email</i>pthgiang95@gmail.com</li>
                        <li><i class="fa fa-skype" aria-hidden="true"></i>yourusername@skype.com</li>
                        <li><i class="material-icons">phone</i>0903 539 569</li>
                        <li><i class="material-icons">place</i>514/32/29 Le Duc Tho, Wards 17, Go Vap Distric, Ho Chi Minh City</li>
                    </ul>
                    <ul className='introtop_link'>
                        <li className='fb'><a href='/'><i class="fa fa-facebook"></i></a></li>
                        <li className='gg'><a href='/'><i class="fa fa-google-plus"></i></a></li>
                        <li className='ins'><a href='/'><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div className='introtop_content__right'>
                <img src={profile} alt="profile"></img>
                </div>
            </div>
        </section>
    </>
  )
}

export default IntroTop