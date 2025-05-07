import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {      
        return (
            <>
            <div className="row">

                <div className="col-md-12">
                    <label>Nombre: </label>
                    <input type="Nombre" required className="form-control" />
                </div>
                
                <div className="col-md-12">
                    <label>Apellido: </label>  
                    <input type="Apellido" required className="form-control" />  
                </div>

                <div className="col-md-12">
                    <label>Correo electronico: </label>  
                    <input type="Email" required className="form-control" />  
                </div>

                <div className="col-md-12">
                    <label>Direccion: </label>  
                    <input type="Direccion" required className="form-control" />  
                </div>

            </div>
            </>
        );
    };
export default Register