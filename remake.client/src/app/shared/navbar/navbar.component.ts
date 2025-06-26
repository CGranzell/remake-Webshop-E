import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../auth/login/login.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username: string | null = '';
  isLoggedIn: boolean = false;


constructor(public authService: AuthService, private modalService: NgbModal) { }

ngOnInit(): void {
  this.username = this.authService.getUsername();
  this.authService.isLoggedIn$.subscribe(status => {
    this.isLoggedIn = status;
    if ( status) {
      this.username = this.authService.getUsername();

    } else {
      this.username = '';
    }
  })
}

openLoginModal(): void {
  const modalRef = this.modalService.open(LoginComponent);
  modalRef.result.then(
    () =>{
      if(this.authService.getToken()) {
        this.username = this.authService.getUsername();
      }
    }, //  när modal stängs normalt, hämta username
    () => {} // optional: när modal avbryts (ESC eller klick utanför)
  );
}

logout(): void {
  this.authService.logout();
  this.username = null; 
  console.log('User logged out');
}


}




