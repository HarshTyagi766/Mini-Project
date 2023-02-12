import React, { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';
import '../csss/main.css'




export default function SignUp() {
    const { signUp, error, isLoading } = useSignUp()
    const [signupData, setSignupdata] = useState({
        password: "",
        email: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setSignupdata(previousdata => {
            return {
                ...previousdata,
                [name]: value
            }
        });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        await signUp(signupData.email, signupData.password)


    }
    return (
        <>
            <div className="sn">
                <center><img src="../../images/logo.png" alt="IMG not available" width="20%" /></center>
                <div class="d-flex justify-content-center">
                    <div class="card car1 ">
                        <div class="card-body">
                            <center>
                                <h5 class="card-title car2">Register</h5>
                            </center>
                            <form action="#" onSubmit={handleSubmit}>
                                <div class="mb-3 row car3">
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control pe-auto" id="inputEmail" placeholder="example@mail.com"
                                            name='email'
                                            value={signupData.email}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="mb-3 row car3" >
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"
                                            name='password'
                                            value={signupData.passWord}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                <center>

                                    {error && <div className='error'>{error}</div>}
                                    <input disabled={isLoading} type="submit" value="SignUp" className="btn btn-outline-success me-2 bg-warning text-light car4" />




                                </center>
                            </form>

                        </div>
                    </div>
                </div>


                <div class="container sn">
                    <footer class="py-15 my-4 fixed-bottom">

                        <p class="text-center text-muted">© 2023 Secu-Store</p>
                    </footer>
                </div>
            </div>
        </>
    )
}