import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom';
import { faHouse, faSquarePlus, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import logofy from '../../assets/spotify-logo.png'
import favs from '../../assets/songFav.png'
import github from '../../assets/github-white.png'

export const SideBar = () => {
   const location = useLocation()
   const {pathname} = location

  return (
    <div className='_sidebar sidebar' >
        
            <img src={`https://res.cloudinary.com/dgx5mp5tw/image/upload/v1657025579/Spotify%20Clone/spotify-logo_owcvzw.png`} className='_sidebar img-logo'/>

        
        <ul className='_sidebar menu-items'>
            <li className='_sidebar li-item'>
                <NavLink to='/' >
                    <button className={pathname === '/' ? 'buttons sidebar-btn active' : 'buttons sidebar-btn'}>
                        <FontAwesomeIcon icon={faHouse} className='_sidebar icon-item active'/>
                        Home
                    </button>
                </NavLink>
            </li>
            <li className='_sidebar li-item'>
                <NavLink to='/search' >

                    <button className={pathname === '/search' ? 'buttons sidebar-btn active' : 'buttons sidebar-btn'}>
                    <FontAwesomeIcon icon={faSearch}  className='_sidebar icon-item' />
                        Search
                    </button>
                </NavLink>
            </li>
            <li className='_sidebar li-item'>
                <NavLink to='/library' >

                    <button className='_buttons sidebar-btn'>
                    <FontAwesomeIcon icon={faBookOpen} className='_sidebar icon-item'/>
                        Library
                    </button>
                </NavLink>
            </li>
            
            
        </ul>
        <ul className='_sidebar menu-items'>
            <li  className='_sidebar li-item'>
            <button className='_buttons sidebar-btn'>
                    <FontAwesomeIcon icon={faSquarePlus} className='_sidebar icon-item' />
                        Create list
                    </button>
            </li>
            <li  className='_sidebar li-item'>
            <button className='_buttons sidebar-btn'>
                <img src={favs} className='_sidebar icon-item'/>
                    {/* <FontAwesomeIcon icon={faSquarePlus} className='_sidebar icon-item' /> */}
                        Favorite songs
            </button>
            </li>
        </ul>
        <hr/>
        <a className='_buttons sidebar-a' target="_blank" href='https://github.com/derekcantillo/Spotify-Web-Clone' >

                <img src={github} className='_sidebar icon-item'></img>
                    {/* <FontAwesomeIcon icon={faGithub} className='_sidebar icon-item' /> */}
                    GitHub Repository
            </a>
        <div className='_sidebar library'>
            <h5 color='white'>Your Librarys</h5>
        </div>
    </div>
  )
}
