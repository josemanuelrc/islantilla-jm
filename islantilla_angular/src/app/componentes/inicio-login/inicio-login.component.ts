import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio-login',
  templateUrl: './inicio-login.component.html',
  styleUrls: ['./inicio-login.component.css'],
})
export class InicioLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nif: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.authService.getUserLoggedObs().subscribe((userLogged) => {
      console.log('Valor emitido por el observable', userLogged);
      if (userLogged) {
        this.router.navigate(['tabla-reservas']);
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
