import { Deporte } from "./deporte";

export class Modalidad {
    idModalidad?:number;
    nombre?:string;
    numHombres?:number;
    numMujeres?:number;
    edadMaxima?:number;
    edadMinima?:number;
    sede?:string;
    deporte?:Deporte;
}
