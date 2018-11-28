
let mockApiData =[
    {
        id:1,
        name:"Lish vona"
    },
    {   id:2,
        name:"Sosni"
    },
    {  id:3,
        name:"Koli tobi vagko"
    },
    {   id:4,
        name:"Ya ne zdamsa bez boyu"},
      { id:5,
        name:"Na linii vognu",
        
    }
]

export const asyncGetTracks = ()=>dispatch =>{
      setTimeout(()=>{
        console.log('I got tracks')
        dispatch({type:'FETCH_TRACKS_SUCCESS',payload:mockApiData})
      },2000)
    }
  