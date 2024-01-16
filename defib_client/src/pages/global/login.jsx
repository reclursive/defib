
const Login = () => {
    return (
        <div>
            <h1>
                Login
            </h1>
            <h1>SIGN UP to DeFib</h1>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login