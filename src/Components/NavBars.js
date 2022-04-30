import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const NavBars  = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Generate',
        link: '/generate'
      },
      {
        text: 'Enrich',
        link: '/enrich'
      },
      {
        text: 'Predict',
        link: '/predict'
      }
    ],
    logo: {
      text: 'Data enrichment system',
      link: '/'
    },
    style: {
      barStyles: {
        background: '#444'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
    return (
       <Navbar {...props} />
    )
}

export default NavBars;