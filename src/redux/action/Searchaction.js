import axios from 'axios'
import {API} from '../../config.js'

export const searchUser=(username)=>async(dispatch)=>{
    try {
        dispatch({
            type:"Search_Request"
        })

        const response =await axios.get(`${API}/${username}`).then(res=>res.data)
        dispatch({
            type: "Fetch_data",
            payload: {
                avatar:response.avatar_url,
                name:response.name,
                email:response.email,
                location:response.location,
                company:response.company,
                twitter:response.twitter_username,
                website:response.blog,
                bio:response.bio,
                follower:response.followers,
                following:response.following,
                public_repo:response.public_repos,
                join_date:response.created_at,
                hireable:response.hireable
            }
        })

        
    } catch (error) {
        dispatch({
            type: "Fetch_error",
            payload: error.error
        })
        console.log(error)
    }
  
}  

