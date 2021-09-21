import { Ciclo } from "./ciclo.model";

export class Usuario {
    idUsuario?:number;
    nombres?:string;
    apaterno?:string;
    amaterno?:string;
    fechaNacimiento?:Date;
    fechaRegistro?:Date;
    email?:string;
    estado?:Ciclo;
    celular?:number;
    direccion?:string;
    login?:string;
    password?:string;
    dni?:number;
    idTipoUsuario?:number;
    idUbigeo?:number;
}
