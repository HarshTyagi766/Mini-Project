import React, { useState } from 'react';


import { useLogin } from '../hooks/useLogin';


export default function Login() {
    const { login, error, isLoading } = useLogin()


    const [logindata, setlogindata] = useState({
        email: "",
        password: "",
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setlogindata(previousdata => {
            return {
                ...previousdata,
                [name]: value
            }
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(logindata.email, logindata.password,)

    }
    return (
        <>
            <div class="sn">
                <center><img src="../../images/logo.png" alt="IMG not available" width="20%" /></center>
                <div class="d-flex justify-content-center">
                    <div class="card car1" >
                        <div class="card-body">
                            <center>
                                <h5 class="card-title car2" >Log in</h5>
                            </center>
                            <form action="#" onSubmit={handleSubmit}>
                                <div class="mb-3 row car3" >
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control pe-auto" id="inputEmail" placeholder="example@mail.com"
                                            name="email"
                                            value={logindata.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div class="mb-3 row car3" >
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            value={logindata.passWord} />
                                    </div>
                                </div>
                                <br />
                                <center>

                                    {error && <div className='error1'>{error}</div>}
                                    <input class="btn btn-outline-success me-2 bg-warning text-light car4" disabled={isLoading} type="submit" value="Login" />


                                </center>
                            </form>

                        </div>
                    </div>
                </div>


                <div class="container">
                    <footer class="py-3 my-4 fixed-bottom">
                        <p class="text-center text-muted">© 2023 Secu-Store</p>
                    </footer>
                </div>
            </div>
        </>)
}