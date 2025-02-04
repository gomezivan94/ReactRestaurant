import { AboutSectionPage, ImageGallery, Reviews } from '../../components'
import './about.css'


const clients = [
  {
    id:1,
    name:'John',
    image:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum at felis viverra placerat. Nulla facilisi. Aliquam erat volutpat. Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  },
  {
    id:2,
    name:'Jane',
    image:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum at felis viverra placerat. Nulla facilisi. Aliquam erat volutpat. Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  },
  {
    id:3,
    name:'Bob',
    image:'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum at felis viverra placerat. Nulla facilisi. Aliquam erat volutpat. Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  },
  {
    id:4,
    name:'Alice',
    image:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum at felis viverra placerat. Nulla facilisi. Aliquam erat volutpat. Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  }
]

function About() {
  return (
    <div className='about-page'>

      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>

      <AboutSectionPage/>

      <div className='bg-dark text-light'>
        <ImageGallery className="bg-dark text-light"/>
      </div>


      <div className='my-5'>
        
      </div>
          <Reviews
            clients={clients}
          
          />
    </div>
  )
}

export default About