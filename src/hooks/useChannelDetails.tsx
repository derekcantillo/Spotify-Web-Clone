import { useEffect, useState } from "react"
import { ChannelFull, Details } from "../interfaces/channellFullInterface";
import channelDB from "../services/http-commons";


export const useChannelDetails = (channelId: number) => {
    const [detail, setDetatil] = useState<Details>();
    const [isLoading, setisLoading] = useState(true)
    const getChannelById = async ()=>{
        const response = await channelDB.get<ChannelFull>(`channels/${channelId}`)
        setDetatil(response.data.body)
        setisLoading(false)
    }
    useEffect(() => {
        getChannelById()
    }, [])


    return {
        detail,
        isLoading
    }

}
