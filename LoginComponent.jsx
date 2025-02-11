import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')
    
    const [password, setPassword] = useState('')
    
    const [showErrorMessage, setshowerrorsMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    async function handleSubmit() {
        if(await authContext.login(username, password)) {
                navigate(`/welcome/${username}`) 
            } else {
                setshowerrorsMessage(true)
            }
    }

    return (
        <div className="Login">
            <h1>Time to login</h1>
            {showErrorMessage && <div className="errorMessage">Authenticated Failed Please check your credentials</div>}
            <div className='LoginForm'></div>
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="passsword" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
        </div>
    )
}

export default LoginComponent