import http from "./http-commons";

const getChannelsRecommended=()=>{
    return http.get('channels/recommended')
}

export default {
    getChannelsRecommended
}