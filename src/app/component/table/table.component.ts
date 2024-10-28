// src/app/components/table.component.ts
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EditBookDialogComponent } from '../edit-book-dialog/edit-book-dialog.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { Book } from '../../model/book/book.module';
import { BookService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { QuantityFormatPipe } from '../../pipes/quantity-format.pipe'; // Importa el pipe standalone

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    EditBookDialogComponent,
    ConfirmDeleteDialogComponent,
    QuantityFormatPipe // Añade el pipe standalone aquí
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'title', 'author', 'price', 'quantity', 'actions'];
  books: Book[] = [];

  constructor(private bookService: BookService, public dialog: MatDialog) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  openEditDialog(book: Book) {
    const dialogRef = this.dialog.open(EditBookDialogComponent, {
      data: { ...book }
    });

    dialogRef.afterClosed().subscribe(updatedBook => {
      if (updatedBook) {
        this.books = this.books.map(b => (b.id === updatedBook.id ? updatedBook : b));
      }
    });
  }

  openDeleteDialog(bookId: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: bookId
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.deleteBook(bookId).subscribe(() => {
          this.books = this.books.filter(b => b.id !== bookId);
        });
      }
    });
  }
}
