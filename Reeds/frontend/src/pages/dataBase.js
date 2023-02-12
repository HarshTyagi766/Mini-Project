
const DataBase = () => {
    return (
        <>
            <div class="sn">
                <center><img src="../../images/logo.png" alt="IMG not available" width="20%" /></center>
                <div class="d-flex justify-content-center">
                    <div class="card car1">
                        <div class="card-body">
                            <center>
                                <h5 class="card-title car2" >Download Database!!</h5>
                            </center>

                            <center>
                                <button class="btn btn-outline-success me-2 bg-warning text-light cr1" type="button">
                                    <a href="../../console/backup_directory.txt" class="car5" target="_blank" download="Secu-Store.txt">Download</a>
                                </button>
                            </center>
                        </div>
                    </div>
                </div>

                <div class="container ">
                    <footer class="py-3 my-4 fixed-bottom">
                        <p class="text-center text-muted">© 2023 Secu-Store</p>
                    </footer>
                </div>

            </div>
        </>
    )

}
export default DataBase;