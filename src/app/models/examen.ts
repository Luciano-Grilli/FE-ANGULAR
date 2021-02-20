import { Asignatura } from "./asignatura";
import { Base } from "./base";
import { Pregunta } from "./pregunta";

export class Examen implements Base{
    id: number;
    nombre: string;
    preguntas: Pregunta[]=[];
    asignatura: Asignatura;
    respondido: boolean;
    createAt: string;
}
