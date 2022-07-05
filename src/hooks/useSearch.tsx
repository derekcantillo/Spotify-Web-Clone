import { useState, useEffect } from 'react';
import { Audios, AudiosClips } from '../interfaces/audioInterface';
import { Channel, ChannelDB } from '../interfaces/channelInterface';
import { Canales, ChannelFind } from '../interfaces/channelsFinders';
import channelDB from '../services/http-commons';


export const useSearch = (query:string) => {

    const [audios, setAudios] = useState<Audios>();
    const [channels, setChannels] = useState<Canales>()
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        getAudiosByQuery()
        getChannelByQuery()
    }, [query])

        const getAudiosByQuery = async ()=>{
            const response = await channelDB.get<AudiosClips>(`audio_clips?find[query]=${query}`)
            setAudios(response.data.body)
            setIsLoading(false)
        }
        const getChannelByQuery = async ()=>{
            const response = await channelDB.get<ChannelFind>(`channels?find[title]=${query}`)
            setChannels(response.data.body)
            setIsLoading(false)
        }

 
    
    return {
        audios,
        channels,
        isloading
    }

}
