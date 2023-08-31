import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private equipoService: EquiposService
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
      // Aquí puedes realizar la lógica de autenticación
      // Por ejemplo, verificar el usuario y contraseña
      // Si la autenticación es exitosa, puedes redirigir a la página principal
      this.route.navigate(['/equipos/listar']);
    }
  }

  consultarEquipo() {
    this.route.navigate(['/equipos/consultar']);
  }
}
