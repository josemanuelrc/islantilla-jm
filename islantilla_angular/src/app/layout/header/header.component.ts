import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  tituloApp: string = '';
  @Output()
  onSectionSelected = new EventEmitter<number>();

  isLogged = false;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onClickSection(section: number) {
    this.onSectionSelected.emit(section);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/inicio-login']);
  }
}
