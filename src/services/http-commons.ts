
import axios from 'axios'

const channelDB= axios.create({
    baseURL:'https://api.audioboom.com/',
    headers:{
        'Content-type':'application/json'
    }
});

export default channelDB