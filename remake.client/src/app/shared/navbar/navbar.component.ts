import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../auth/login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor(public authService: AuthService, private modalService: NgbModal) { }

openLoginModal(): void {
  const modalRef = this.modalService.open(LoginComponent);
  modalRef.result.then(
    () =>{}, // optional: när modal stängs normalt
    () => {} // optional: när modal avbryts (ESC eller klick utanför)
  );
}

logout(): void {
  this.authService.logout();
  console.log('User logged out');
}

isLoggedIn(): boolean {
  return !!this.authService.getToken();
}
}




