import logoBrand from './images/rhumbix-logo-white.png'
import logoAirbnb from './images/logo-airbnb.png'
import logoAleph from './images/logo-aleph.png'
import logoGirlsLeadership from './images/logo-girlsleadership.png'
import logoHabitat from './images/logo-habitat.png'
import LogoKQED from './images/logo-kqed.png'
import logoKelsey from './images/logo-thekelsey.png'
import quotes from './images/quotes.png'
import andrew from './images/andrew.png'
import './TestWrapper.scss'

/*
This is a wrapper that I created ahead of time. At the time of the test, I will copy this into
a new repo where I will start the test from scratch. The test will be a react component that
is the child to this wrapper.

I created this ahead of time because I haven't had the greatest luck with technicals and I
haven't been able to show case my frontend skills. I believe this is a good example of what
I am capable of doing in about 8 hours.

The test component will be created and completed within the alotted hour... Hopefully.

Wow this will be really embarassing if I totally flop on the technical. Fingers crossed!
*/

const TestWrapper = (props) => {
  const { children } = props

  return (
    <div className='TestWrapper'>
      <header className='TestWrapper_HeaderWrap'>
        <address className='TestWrapper_Address'>
          <div className='TestWrapper_AddressInner container'>
            <div className='TestWrapper_AddressLeft'>
              <a className='TestWrapper_AddressLeftPhone TestWrapper_AddressLink' target='_blank' rel='noreferrer' href='tel:+14158685025'>
                <span className='TestWrapper_AddressIcon'>✆</span>1.415.868.5025
              </a>
              <a className='TestWrapper_AddressLeftEmail TestWrapper_AddressLink' target='_blank' rel='noreferrer' href='mailto:andrew.pungprakearti@gmail.com'>
              <span className='TestWrapper_AddressIcon'>✉</span>andrew.pungprakearti@gmail.com
              </a>
            </div>
            <div className='TestWrapper_AddressRight'>
              <a className='TestWrapper_AddressRightLinkedIn TestWrapper_AddressLink' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/andrewpungprakearti/'>
                LinkedIn
              </a>
              <a className='TestWrapper_AddressRightGitHub TestWrapper_AddressLink' target='_blank' rel='noreferrer' href='https://github.com/pungprakearti'>
                GitHub
              </a>
            </div>
          </div>
        </address>
        <div className='TestWrapper_Header'>
          <div className='TestWrapper_HeaderInner container'>
            <a target='_blank' rel='noreferrer' href='https://www.rhumbix.com'>
              <img className='TestWrapper_HeaderLogo' src={logoBrand} alt='Rhumbix logo in yellow and white' />
            </a>
            <div className='TestWrapper_HeaderTitle'>
              Technical test
            </div>
            <a className='TestWrapper_HeaderRepo' target='_blank' rel='noreferrer' href='https://github.com/pungprakearti'>
              Check out the code
            </a>
          </div>
        </div>
      </header>
      <main className='TestWrapper_Child'>
        <div className='TestWrapper_ChildInner container'>
          { children }
        </div>
      </main>
      <section className='TestWrapper_Intro'>
        <div className='TestWrapper_IntroInner container'>
          <h1>
            Andrew is a frontend engineer at Aleph Incorporated
          </h1>
          <p>
            He has worked on 10 websites within two years and most of which were created from scratch.
            Before finding stability as an engineer, Andrew developed games. His most notable is currently available
            on Steam called, "Lil Tanks."
            Before that, Andrew worked on over 40 motion pictures as a digital effects artist.
            <br /><br />
            Andrew's current career goal is to become a fullstack engineer. He has a very strong understanding
            of frontend engineering and wants to fully grasp backend engineering as well.
            <br /><br />
            Upon employment Andrew would love to tell his hilarious story of how he joined the United States Marine Corps.
          </p>
        </div>
      </section>
      <section className='TestWrapper_Work'>
        <div className='TestWrapper_WorkInner container'>
          <h2 className='TestWrapper_WorkTitle'>
            Some notable websites Andrew has worked on
          </h2>
          <div className='TestWrapper_WorkGrid'>
            <a className='TestWrapper_WorkLink' target='_blank' rel='noreferrer' href='https://www.kqed.org'>
              <img className='TestWrapper_WorkImage' src={LogoKQED} alt='KQED logo with hot-pink background' />
            </a>
            <a className='TestWrapper_WorkLink' target='_blank' rel='noreferrer' href='https://www.airbnb.com'>
              <img className='TestWrapper_WorkImage' src={logoAirbnb} alt='Airbnb logo' />
            </a>
            <a className='TestWrapper_WorkLink' target='_blank' rel='noreferrer' href='https://habitatgsf.org'>
              <img className='TestWrapper_WorkImage' src={logoHabitat} alt='Habitat for Humanity logo' />
            </a>
            <a className='TestWrapper_WorkLink' target='_blank' rel='noreferrer' href='https://girlsleadership.org'>
              <img className='TestWrapper_WorkImage' src={logoGirlsLeadership} alt='Girls Leadership logo' />
            </a>
            <a className='TestWrapper_WorkLink' target='_blank' rel='noreferrer' href='https://thekelsey.org'>
              <img className='TestWrapper_WorkImage' src={logoKelsey} alt='The Kelsey logo' />
            </a>
            <a className='TestWrapper_WorkLink' target='_blank' rel='noreferrer' href='https://aleph.dev'>
              <img className='TestWrapper_WorkImage' src={logoAleph} alt='Aleph Incorporated logo' />
            </a>
          </div>
        </div>
      </section>
      <section className='TestWrapper_Quote'>
        <div className='TestWrapper_QuoteInner container'>
          <div className='TestWrapper_QuoteLeft'>
            <div className='TestWrapper_QuoteLeftIconWrap'>
              <img className='TestWrapper_QuoteLeftIcon' src={quotes} alt='Open quotes' />
            </div>
            <div className='TestWrapper_QuoteLeftContext'>
              <p className='TestWrapper_QuoteLeftContextQuote'>
                Wow! Just wow. Andrew is such a pleasure to have in the office or a quick zoom call away.
                Dogs LOVE him! He's also phenomenal at speaking in the third person."
              </p>
              <h3 className='TestWrapper_QuoteLeftContextName'>
                Andrew Pungprakearti
              </h3>
              <h4 className='TestWrapper_QuoteLeftContextTitle'>
                Self
              </h4>
            </div>
          </div>
          <img className='TestWrapper_QuoteRight' src={andrew} alt='Andrew scream laughing with his wife Samantha' />
        </div>
      </section>
      <footer className='TestWrapper_Footer'>
        <div className='TestWrapper_FooterInner container'>
          <span className='TestWrapper_FooterText'>
            Andrew Pungprakearti
          </span>
          <span className='TestWrapper_FooterText'>
            1.415.868.5025
          </span>
          <span className='TestWrapper_FooterText'>
            andrew.pungprakearti@gmail.com
          </span>
        </div>
      </footer>
    </div>
  )
}

export default TestWrapper
