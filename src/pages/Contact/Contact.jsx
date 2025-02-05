import { ContactForm } from '../../components'
import './contact.css'

function Contact() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
      <div className='container h-100 d-flex align-items-center justify-content-center'>
                  <h1 className='text-light'>Contact</h1>
            </div>
      </header>
      <ContactForm/>
    </div>
  )
}

export default Contact