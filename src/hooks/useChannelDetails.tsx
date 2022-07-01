import { useEffect, useState } from "react"
import { ChannelFull, Details } from "../interfaces/channellFullInterface";
import channelDB from "../services/http-commons";


export const useChannelDetails = (channelId: number) => {
    const [state, setState] = useState<Details>();
    const [isLoading, setisLoading] = useState(true)
    const getChannelById = async ()=>{
        const response = await channelDB.get<ChannelFull>(`channels/${channelId}`)
        setState(response.data.body)
        setisLoading(false)
    }
    useEffect(() => {
        getChannelById()
    }, [])


    return {
        state,
        isLoading
    }

}
