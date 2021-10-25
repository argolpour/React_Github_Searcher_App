import { useContext } from 'react/cjs/react.development';
import githubContext from '../../context/github/githubContext';

import User from './User';
import './Users.css';

const Users = () => {
const {users}=useContext(githubContext);

    return (
        <div className="users">
            {users.map(user=><User user={user}/>)}
            
        </div>
    )
}

export default Users
