import { useEffect, useState } from "react"
import { AudioSpecific, ClipDetails } from "../interfaces/audioSpecificInterface";
import channelDB from "../services/http-commons";


export const useAudioSpecific= (audioId: number) => {
    const [audioSpecific, setAudioSpecific] = useState<ClipDetails>();
    const [isLoading, setisLoading] = useState(true)
    
    const getAudioById = async ()=>{
        const response = await channelDB.get<AudioSpecific>(`audio_clips/${audioId}`)
        setAudioSpecific(response.data.body)
        setisLoading(false)
    }
    useEffect(() => {
        getAudioById()
    }, [])


    return {
        audioSpecific,
        isLoading
    }

}