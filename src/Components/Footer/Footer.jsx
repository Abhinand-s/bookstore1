//import footer.css
import './footer.css'
//import footer data
import { FootersLinksData } from '../../Data/Data'
//import link 
import { Link } from 'react-router-dom'
//import copyright and social
import CopyRIght from '../CopyRight/CopyRIght'


export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/* ....about params*/}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {
              FootersLinksData.Aboutus.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname} </Link></li>
                )
              })
            }
          </ul>
        </div>
        {/* ....discover params*/}
        <div>
          <h4>Discover Us</h4>
          <ul className="Discover-params param-links">
            {
              FootersLinksData.Discover.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname} </Link></li>
                )
              })
            }
          </ul>
        </div>
        {/* ....myaccount params*/}
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {
              FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname} </Link></li>
                )
              })
            }
          </ul>
        </div>
        {/* ....help params*/}
        <div>
          <h4>Helps</h4>
          <ul className="help-params param-links">
            {
              FootersLinksData.Help.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname} </Link></li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <CopyRIght />
    </footer>
  )
}
