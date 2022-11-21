import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {RiHome5Fill} from 'react-icons/ri'
import {AiFillAccountBook} from 'react-icons/ai'
import {MdPublishedWithChanges} from 'react-icons/md'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import '../../assets/css/Navigation.css'
function Navigation() {


  return (
    <Nav className="nav">
      <div className='sub-nav'>
        <div className='icons'>
        <RiHome5Fill />
        </div>
        <a href="/" className='heading'>
          Home
        </a>
      </div>
      <div className='sub-nav'>
      <div className='icons'>
        <AiFillAccountBook />
        </div>
        <a href="#" className='heading'>
          Recharge
        </a>
      </div>
      <div className='sub-nav'>
      <div className='icons'>
        <MdPublishedWithChanges />
        </div>
        <a href="#" className='heading'>
          Withdraw
        </a>
      </div>
      <div className='sub-nav'>
      <div className='icons'>
        <BsFillPersonBadgeFill />
        </div>
        <a href="#"className='heading'>
          Agent
        </a>
      </div>
      <div className='sub-nav'>
      <div className='icons'>
        <BsFillPersonFill />
        </div>
        <a href="/profile"className='heading'>
          Profile
        </a>
      </div>
    </Nav>
  );
}

export default Navigation;