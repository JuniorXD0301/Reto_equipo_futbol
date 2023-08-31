import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private route: Router, private snackBar: MatSnackBar) {}

  login() {
    this.route.navigate(['/login']);
  }
  mensaje() {
    this.snackBar.open('Gracias por su participación', 'Cerrar', {
      duration: 3000,
    });
  }
}
