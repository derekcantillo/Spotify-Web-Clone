
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { CardItem } from '../components/ui/CardItem';
import { NavBar } from '../components/ui/NavBar'
import { useChannels } from '../hooks/useChannels'
import { RootState } from '../store/store'
import { useSearch } from '../hooks/useSearch';
import { CardAudioItem } from '../components/ui/CardAudioItem'
import queryString from 'query-string'

const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const {channelsRecommended}=useChannels()
  const {loading}=useSelector((state : RootState) => state.ui)
  const handleNavigate =(channelId : number)=>{
    navigate(`/channel/${channelId}`)
  }
  const {q = ''} = queryString.parse(location.search)
 
  const query : string = q as string;
  const {audios, isloading, channels} = useSearch(query)


  return (
    <div className='_searchbar search-content'> 
        <NavBar/>
        <div className='_home home-sections'>
        {
          query === '' ?

          <section>
              <div className='_home section-title'>
                <h1>Explore all</h1>
              </div>

              <div className='_home recommended-content'>
            
                    {
                      !isloading  &&
                        
                      channelsRecommended.map((item) =>(
                          <div key={item.id} onClick={()=>handleNavigate(item.id)}>
                            <CardItem channel={item}/>
                          </div>
                        ))
                    }
      
              </div>
            </section>
          :
          
          <div>
              <div className='_home section-title'>
                <h1>Search results: <small>"{query}"</small></h1>
              </div>
            <section>
            <div className='_home section-title'>
                <h1>Channels</h1>
            </div>
            
                    {
                      channels?.channels.length > 0 ?

                      

                        channels?.channels.map((item) =>(

                          <div className='_home recommended-channels-content'>

                          <div key={item.id} onClick={()=>handleNavigate(item.id)}>
                            <CardItem channel={item}/>
                          </div>
                          </div>
                        ))
                       
                      : 
                      <div className='_home section-title'>
                          <h2>No channels found...</h2>
                      </div>
                    }
      
              

            <div className='_home section-title'>
                <h1>Episodes</h1>
              </div>
            {
              audios?.audio_clips.length > 0 ?

              <div className='_home results-content'>
            
                    {
                      query != '' &&
                        
                        audios?.audio_clips.map((item) =>(
                          <div key={item.id} onClick={()=>handleNavigate(item.id)}>
                            <CardItem audio={item}/>
                          </div>
                        ))
                    }
      
              </div>
              :
              <div className='_home section-title'>
                  <h2>No episodes found...</h2>
              </div>

            }
              
            </section>

          </div>
        }
        </div>
    </div>
  )
}

export default SearchScreen;