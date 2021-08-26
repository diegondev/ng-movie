
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class AbstractCrudService<T> {
    private BASE_URL = environment.baseUrl;

    constructor(
        public http: HttpClient,
        public URL: string // Endpoint depois da base URL
    ) {
        this.BASE_URL = this.BASE_URL + URL;
    }

    public getAll(queryParams?: string): Observable<any> {
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