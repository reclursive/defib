const SignUp = () => {
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: ''
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const onChange = (event) =>{
        setValues({...values, [event.target.name]: event.target.value})
    }   
    const submit = async (event) =>{
        event.preventDefault()
        try{
            const {data} = await onsubmit(values)
            setError('')
            setSuccess(data.message)
            setValues({email: '', username: '', password:''})
        }
        catch (error){
            console.log(error.response)
            setError(error.response.data.errors[0].msg)
        }
    }   
    return (
        <div>
            <h1>SIGN UP to DeFib</h1>
            <form onSubmit={(event) => onSubmit(event)}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                <small id="emailHelp" class="form-text text-muted">Make it unique!</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                <small id="emailHelp" class="form-text text-muted">8+ characters, at lease one symbol and number</small>

            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Re-enter password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password again"/>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Newsletter?</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp