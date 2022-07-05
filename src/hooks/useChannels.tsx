import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Channel, ChannelDB } from '../interfaces/channelInterface'
import channelDB from '../services/http-commons'

export const useChannels = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    
    const [channelsRecommended, setchannelsRecommended] = useState<Channel[]>([])
    useEffect(() => {
        getChannels();
    }, [])

    const getChannels = async ()=>{
        const response = await channelDB.get<ChannelDB>('channels/recommended');
        setchannelsRecommended(response.data.body)

        setIsLoading(false)
    }


    

    return {
        
        channelsRecommended,
        isLoading
    }
    
}
