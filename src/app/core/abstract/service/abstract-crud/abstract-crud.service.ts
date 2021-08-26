
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_URL as CONST_BASE_URL } from "src/app/core/constant/api-url";

export abstract class AbstractCrudService<T> {
    private BASE_URL = CONST_BASE_URL;

    constructor(
        public http: HttpClient,
        public URL: string // Endpoint depois da base URL
    ) {
        this.BASE_URL = this.BASE_URL + URL;
    }

    public getAll(queryParams?: string): Observable<any> {
        console.log(CONST_BASE_URL)
        return this.http.get(this.BASE_URL);
    }

    public getOne(id: string): Observable<any> {
        return this.http.get(`${this.BASE_URL}/${id}`);
    }

    // public save(data: T): any
    // public saveMultiple(data: T[]): any
    // public update(data: T): any
    // public updateMultiple(data: T[]): any
    // public patch(data: T): any
    // public delete(id: string): any
    // public deleteMultiple(id: string[]): any
}