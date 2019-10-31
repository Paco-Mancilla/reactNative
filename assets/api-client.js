const URL='https://mobile-api-ucol.herokuapp.com'

function getToken(email, password){
    return fetch(`${URL}Login`, {
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'appliaction/json',
        },
        body: JSON.stringify({
            email:email,
            password:password,
        }),
    })
    .then(response=> response.json())
    .then(data=>{
        return data
    })
}

function getMusicData(){
    return fetch(`${URL}music_data`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type': 'applicaion/json',
        },
        body: JSON.stringify({
            token: global.token,
        }),
    })
    .then(response=>response.json())
    .then(data => data.todartists.artists)
    .then(artists=>artists.map(artists=>{
        return{
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text'],
            likes: 200,
            comments:140
        }
    }))
    }


export{getToken, getMusicData}