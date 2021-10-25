import { useReducer } from 'react';
import GithubContext from './githubContext';
import githubReducer from './GithubReducer';
import {GET_USERS,SET_LOADING,GET_USER,GET_REPOS,CLEAR_USERS} from './../Types';


const GithubState = ({children}) => {
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    };
  

    const [state, dispatch] = useReducer(githubReducer, initialState);
    const setLoading=()=>dispatch({type:SET_LOADING});
    const clearAll=()=>dispatch({type:CLEAR_USERS})
    

const fetchData=async (username)=>{
    setLoading();
   await fetch (`https://api.github.com/search/users?q=${username}`).then(respond=>respond.json()).then(data=>{
    dispatch({ type:GET_USERS, payload: data.items });
      
   }).catch((err)=>{
     
       console.log(err);
   }).finally(()=>{
      
   })
 }

 const FetchSingleUser=async (login)=>{
      setLoading();
   await fetch (`https://api.github.com/users/${login}`).then((respond)=>respond.json()).then((data)=>{
      dispatch({type:GET_USER,payload:data})
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
      
    })
        
}

const FetchUserRepos=(login)=>{
      
    fetch (`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`).then((respond)=>respond.json()).then((data)=>{
        dispatch({type:GET_REPOS,payload:data})
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
      
    })
        
}

    return (
        <GithubContext.Provider value={{...state,fetchData,clearAll,FetchSingleUser,FetchUserRepos}}>
       {children}
       </GithubContext.Provider>
    )
}

export default GithubState
