import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/books.service';
import { Book } from '../../model/book/book.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, CommonModule, FormsModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bookId: number = 0;

  constructor(private bookService: BookService) {}

  searchBook() {
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (book: Book) => {
          alert(`Detalles del libro:\nID: ${book.id}\nTítulo: ${book.title}\nAutor: ${book.author}\nPrecio: ${book.price}\nCantidad: ${book.quantity}`);
        },
        error: (error) => {
          alert('No se encontró un libro con el ID especificado.');
        }
      });
    } else {
      alert('Por favor, ingresa un ID válido.');
    }
  }
}
