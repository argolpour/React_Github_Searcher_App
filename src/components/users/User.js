import { Link } from 'react-router-dom';
const User = ({user}) => {

    return (
        <section className="user-box">
            <img src={user.avatar_url} alt={user.login}/>
            <h5>{user.login}</h5>
            <Link to={`/user/${user.login}`} className="btn btn-dark btn-block" >more...</Link>
        </section>
    )
}

export default User
