import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ToastService {
  constructor(private _snackBar: MatSnackBar) { }

  public snackbar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
