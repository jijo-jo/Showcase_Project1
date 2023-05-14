import React,{useState} from 'react'
import { Link,useHistory} from 'react-router-dom'
import { login } from '../api'
import './UserRegSignIn.css'


export default function LogInPage() {
    const history = useHistory();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [showloginerror,setLogginerror] = useState(false);

    const handleSubmit = async ()=>{
      let cred={
        username:username,
        password:password
      }
      await login(cred)
      .then((response)=>{
        setLogginerror(false);
        console.log(response);
        localStorage.setItem("Id",response.data.result.Id);
        localStorage.setItem("Role",response.data.result.credential.role.Rolename);
        localStorage.setItem("Accesstoken",response.data.token);
        window.location = '/home'

      })
      .catch((err)=>{
        console.log(err);
        setLogginerror(true);
      })

    }

    return (
        <div className="text-center m-5-auto">
            <div className='tiltle'>
              Indian Watches
            </div>
            <h2 className='sign_in_text'>Sign in to us</h2>
            {showloginerror && <div style={{backgroundColor:"white",color:'FF0000'}}><h3>Loggin error login again</h3></div>}
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" onChange={(e)=>{setUsername(e.target.value)}} required />
                </p>
                <p>
                    <label>Password</label>
                    {/* <Link to="/forget-password#app"><label className="right-label">Forget password?</label></Link> */}
                    <br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}required />
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={handleSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/home">Back to Homepage</Link></p>
            </footer>
        </div>
    )
}