import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent } from 'react'
import { useForm } from '../../../hooks/useForm';

import { useNavigate } from 'react-router-dom';


export const SearchBar = () => {

    const navigate=useNavigate()
    const { formData, onChange, searchText } = useForm({
        searchText: ''
    });

    
    const onSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        navigate(`?q=${searchText}`)
    }
  return (
    <div className='_searchbar search-div'>
        <div className='_searchbar search-box'>

            <form onSubmit={onSubmit}>
                <button className='_searchbar icon-search' type='submit'>
                    <FontAwesomeIcon icon={faSearch} color='black'/>

                </button>

                <input 
                    placeholder='Artist, songs, playlist or podcast' 
                    className='_searchbar search-input'
                    onChange={onChange}
                    name='searchText'    
                    value={searchText}
                />
                
            </form>
        </div>
    </div>
  )
}
