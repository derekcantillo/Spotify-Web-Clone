import { useState, useEffect } from 'react';
import { Audios, AudiosClips } from '../interfaces/audioInterface';
import channelDB from '../services/http-commons';


export const useAudioClips = (channelId:number) => {

    const [audios, setAudios] = useState<Audios>();
    const [isloading, setIsLoading] = useState(true)


        const getAudiosByChannel = async ()=>{
            const response = await channelDB.get<AudiosClips>(`channels/${channelId}/audio_clips`)
            setAudios(response.data.body)
            setIsLoading(false)
        }
        useEffect(() => {
            getAudiosByChannel()
        }, [])

 
    
    return {
        audios,
        isloading
    }

}
