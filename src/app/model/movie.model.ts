import { BaseModel } from "./base/base.model";

export class MovieModel extends BaseModel {
    nome: string | undefined;
    ano: number | undefined;
    diretor: string | undefined;
    genero: string | undefined;
    descricao: string | undefined;
    poster: string | undefined;
}