var axios = require('axios')





export default function getTweet(){

    let tweets = []
    axios.get(`http://localhost:3001/twitter`)
    .then(res => {
        // console.log(res.data.length)

        for (let i = 0; i < res.data.length; i++) {
            // console.log([res.data[i]['text'], res.data[i]['created_at']])
            tweets.push({text:res.data[i]['text'],date: res.data[i]['created_at']})
        }
        
        // tweets = res.data
    })
    return tweets
}
