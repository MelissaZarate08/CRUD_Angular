import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../../services/books.service';
import { Book } from '../../model/book/book.module';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class EditBookDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private bookService: BookService
  ) {}

  onSave(form: NgForm) {
    if (form.valid) {
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        this.dialogRef.close(this.book); // Cierra y envía el libro actualizado
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
