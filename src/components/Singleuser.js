import { useContext, useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import githubContext from "../context/github/githubContext";
import './Singleuser.css';

const Singleuser = () => {
    const {login}=useParams();
    const {FetchSingleUser,user,FetchUserRepos,repos}=useContext(githubContext);
    
    
    useEffect(()=>{
        FetchSingleUser(login);
        FetchUserRepos(login);
        // eslint-disable-next-line 
    },[login])
    return (
       <>
      <div className="container">
         
          <div className="single-user-header">
              <Link to="/" class="btn btn-dark">Back to search</Link>
             {user.hireable ? <p>hireable : <i class="fas fa-check color-green"></i></p> : <p>hireable : <i class="fas fa-times color-red"></i></p> }  

          </div>
            <div className="user-section">
                <div className="user-image">
                    <img src={user.avatar_url} alt={user.login} />
                    <h5>{user.login}</h5>
                    <h6>{user.location}</h6>

                </div>
                <div className="user-info">
                     {user.bio ? <p><span className="titr">Bio:</span> {user.bio}</p> :<p><span className="titr">Bio: </span>--</p>}
                    <a href={user.html_url} className="btn btn-dark">Visit</a>
                    <p><span className="titr">Url:</span> <a href={user.html_url} class="">{user.html_url}</a> </p>
                </div>
            </div>
            <div className="social">
              <span>Followers {user.followers}</span>
              <span>Following {user.following}</span>
              <span>Public Gists {user.public_gists}</span>
              <span>Public Repos {user.public_repos}</span>
            </div>

           
            <ul className="repos">
               {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
            
      </div>
        </>
    )
}

export default Singleuser
