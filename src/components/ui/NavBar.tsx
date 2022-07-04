
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SearchBar } from '../Navbar/SearchBar'
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const location =useLocation()
  const navigate = useNavigate()

  return (
    <div className='_navbar navbar'>
        <div>
            <span>
              <button className='_navbar prev-next' onClick={()=>navigate(-1)}>
                <FontAwesomeIcon icon={faAngleLeft} size='2x'/>
              </button>
              <button className='_navbar prev-next' onClick={()=>navigate(+1)}>
                <FontAwesomeIcon icon={faAngleRight} size='2x'/>
              </button>
              {
                location.pathname =='/search' &&
                <SearchBar/>
              }
            </span>
            <span>
              <button className='_navbar profile-btn'>
                Rebuser
              </button>
            </span>
        </div>
    </div>
  )
}
