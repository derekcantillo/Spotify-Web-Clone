
import { useNavigate } from 'react-router-dom'
import { CardItem } from '../components/ui/CardItem'
import { NavBar } from '../components/ui/NavBar'

import { useChannels } from '../hooks/useChannels'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CardHorizontalItem } from '../components/CardHorizontalItem';



export const HomeScreen = () => {
  
  const navigate = useNavigate()
  const {channelsRecommended}=useChannels()
  const {loading}=useSelector((state : RootState) => state.ui)
  const handleNavigate =(channelId : number)=>{
    navigate(`/channel/${channelId}`)
  }

  return (
    <div className='_home home-content'> 
        <NavBar/>
        <div className='_home home-sections'>
          <section>
            <div className='_home section-title'>
              <h1>Recommended channels</h1>
            </div>
            <div className='_home horizontal-cards'>
              {
                !loading &&
                channelsRecommended.slice(0,8).map((chann)=>(
                 
                  <div key={chann.id} onClick={()=>handleNavigate(chann.id)}>
                          <CardHorizontalItem channel={chann}/>
                  </div>
                ))

              }
            </div>
          </section>

          <section>
            <div className='_home section-title'>
              <h1>More Recommended Channels</h1>
            </div>

            <div className='_home recommended-content'>
          
                  {
                    !loading &&
                      
                      channelsRecommended.map((chann) =>(
                        <div key={chann.id} onClick={()=>handleNavigate(chann.id)}>
                          <CardItem channel={chann}/>
                        </div>
                      ))
                  }
    
            </div>
          </section>

        </div>
    </div>
  )
}
