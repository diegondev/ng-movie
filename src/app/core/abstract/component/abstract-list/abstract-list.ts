import { Directive, OnInit } from "@angular/core";
import { AbstractCrudService } from "../../service/abstract-crud/abstract-crud.service";

@Directive()
export abstract class AbstractListComponent<TModel extends any, TService extends AbstractCrudService<TModel>> 
    implements OnInit {

    public loading = false;
    public list: TModel[] = [];

    constructor(
        public service: TService,
    ) {}

    ngOnInit(): void {
        this.initList();
    }

    initList() {
        this.loading = true;
        this.service.getAll().subscribe(data => {
            this.list = data;
            this.afterLoad();
            this.loading = false;
        });
    }

    afterLoad() {
        // Implemente caso necessite realizar uma 
        // ação após carregamento da lista
    }
}