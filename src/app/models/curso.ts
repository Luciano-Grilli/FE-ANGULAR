import { Examen } from "./examen";
import { Alumno } from "./alumno";
import { Base } from "./base";

export class Curso implements Base{
    id: number;
    nombre: string;
    createAt: string;
    alumno: Alumno[]=[];
    examenes: Examen[]=[];

}


