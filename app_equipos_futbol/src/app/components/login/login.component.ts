import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private equipoService: EquiposService,
    private snackbar: MatSnackBar
  ) {}

  loginForm: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.equipoService
        .login(this.loginForm.value.usuario, this.loginForm.value.password)
        .subscribe((data) => {});
      this.route.navigate(['/equipos/listar']);
    }
    else{
      this.snackbar.open('Usuario o contraseña incorrectos', 'Cerrar', );
    }
  }

  consultarEquipo() {
    this.route.navigate(['/equipos/consultar']);
  }
}
