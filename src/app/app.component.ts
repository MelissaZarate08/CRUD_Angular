import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookService } from './services/books.service';
import { Book } from './model/book/book.module';
import { MenuComponent } from './component/menu/menu.component';
import { AddFormComponent } from "./component/add-form/add-form.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { TableComponent } from "./component/table/table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, AddFormComponent, HeaderComponent, FooterComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'libreria';
}
