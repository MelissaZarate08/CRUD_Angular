import { Routes } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { AppComponent } from './app.component';
import { AddFormComponent } from './component/add-form/add-form.component';

export const routes: Routes = [
    {path: '', redirectTo: "add", pathMatch: "full"},
    {
        path: 'ver',
        component: TableComponent
    },
    {
        path: 'add',
        component: AddFormComponent
    }
];
