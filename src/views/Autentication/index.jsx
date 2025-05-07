import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Autentication = () => {      
        return (
            <>
            <div className="row">

                <div className="col-md-12">
                    <label>Email: </label>
                    <input type="email" required className="form-control" />
                </div>
                
                <div className="col-md-12">
                    <label>Contraseña: </label>  
                    <input type="password" required className="form-control" />  
                </div>

                <div className="col-md-12">
                    <button className="btn btn-primary"> Ingresar </button>
                </div>

            </div>
            </>
        );
    };
export default Autentication


