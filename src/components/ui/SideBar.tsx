import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {faHouse, faBook} from '@fortawesome/free-solid-svg-icons'
import logofy from '../../assets/spotify-logo.png'

export const SideBar = () => {

  return (
    <div className='_sidebar sidebar' >
        
        <img src={logofy}/>
        <ul>
            <li>
                <NavLink to='/' >
                    <button className='_buttons sidebar-btn'>
                        <FontAwesomeIcon icon={faHouse} color='white' size='lg'/>
                        Home
                    </button>
                </NavLink>
            </li>
            <li>
                <NavLink to='/library' >

                    <button className='_buttons sidebar-btn'>
                    <FontAwesomeIcon icon={faBook} color='white' size='lg'/>
                        Library
                    </button>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
