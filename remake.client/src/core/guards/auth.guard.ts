import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../../app/auth/auth.service";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if(!this.authService.getToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}