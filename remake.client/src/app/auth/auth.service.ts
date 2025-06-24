import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private readonly apiUrl = 'https://localhost:5193/api/auth';
    private tokenKey = 'jwt_token';

    isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log(`auth.service called with username: ${username}`);

        return this.http.post(`${this.apiUrl}/login`, {userName: username, password}, { responseType: 'text'}).pipe(
            tap(token => {
                console.log(`Token received: ${token}`);
                localStorage.setItem(this.tokenKey, token);
                this.isLoggedIn$.next(true);
            })
        );
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.isLoggedIn$.next(false);
    }

    getToken(): string | null {
        // console.log(`Retrieving token from localStorage: ${this.tokenKey}`);
        
        return localStorage.getItem(this.tokenKey);
    }

    private hasToken(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }
    
    
}