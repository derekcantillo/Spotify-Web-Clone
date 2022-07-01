import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {faHouse, faBook, faSearch} from '@fortawesome/free-solid-svg-icons'
import logofy from '../../assets/spotify-logo.png'

export const SideBar = () => {

  return (
    <div className='_sidebar sidebar' >
        
            <img src={logofy} className='_sidebar img-logo'/>

        
        <ul className='_sidebar menu-items'>
            <li className='_sidebar li-item'>
                <NavLink to='/' >
                    <button className='_buttons sidebar-btn active'>
                        <FontAwesomeIcon icon={faHouse} className='_sidebar icon-item active'/>
                        Home
                        
                    </button>
                </NavLink>
            </li>
            <li className='_sidebar li-item'>
                <NavLink to='/search' >

                    <button className='_buttons sidebar-btn'>
                    <FontAwesomeIcon icon={faSearch}  className='_sidebar icon-item' />
                        Search
                    </button>
                </NavLink>
            </li>
            <li className='_sidebar li-item'>
                <NavLink to='/library' >

                    <button className='_buttons sidebar-btn'>
                    <FontAwesomeIcon icon={faBook} className='_sidebar icon-item' />
                        Library
                    </button>
                </NavLink>
            </li>
            
        </ul>
        <hr/>
        <div className='_sidebar library'>
            <h5 color='white'>Your Librarys</h5>
        </div>
    </div>
  )
}
