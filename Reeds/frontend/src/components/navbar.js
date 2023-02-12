import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <>

            <header>
                <nav class="navbar navbar-expand-lg bg-black bg-gradient">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#"><img src="../../images/nav_log.png" alt="e" width="50px" /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <font color="#ffcf00">Secu-Store</font>
                            <div class="navbar-nav ms-auto">
                                {!user && (
                                    <>
                                        <Link class="nav-link active" aria-current="page" to="/"><font color="ffcf00">Home</font></Link>
                                        <Link class="nav-link" to="/signUp"><font color="ffcf00">Register</font></Link>
                                        <Link class="nav-link" to="login"><font color="ffcf00">Log in</font></Link>
                                    </>
                                )}
                                {user && (<>
                                    <Link class="nav-link active" aria-current="page" to="/"><font color="ffcf00">Home</font></Link>
                                    <Link class="nav-link" to="/download"><font color="ffcf00">Download</font></Link>
                                    <Link class="nav-link" to="/database"><font color="ffcf00">Data Base</font></Link>
                                    <Link class="nav-link" onClick={handleClick} to='/'><font color="ffcf00">Log Out</font></Link>
                                </>)}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Navbar