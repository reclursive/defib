const SignUp = () => {
    const submit = async (event) =>{
        const value = event.target.value
        setNewUser(value)
        console.log(user)
        const res = await req()
    }   
    return (
        <div>
            <h1>SIGN UP to DeFib</h1>
            <form>
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