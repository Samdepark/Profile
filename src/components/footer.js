import "./footerStyle.css"
import {Link} from "react-router-dom"

const Footer =() =>{
   return (
<><footer className="footer">
   <div className="lmts">
   <Link to='/' className='footerHm'>Home</Link>
   <Link to='/about' className='footerAbt'>About Me</Link>
   <Link to='/contacts' className='Contact'>Contact</Link>
   </div><br/>
   <div className="socials">
      <Link>Facebook</Link> |
      <Link>LinkedIn</Link> |
      <Link>Twitter</Link> 
      </div>
</footer>  
 <p className='cprt'> Copyright &copy; 2023</p></>)
}
export default  Footer