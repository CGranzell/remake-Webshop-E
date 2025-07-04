import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export interface User {
    id: number;
    userName: string;
}

@Injectable({
    providedIn: 'root',
})

export class UserService {
   apiUrl = 'https://localhost:7089/api/users';

    constructor(private http : HttpClient) {}

    getUsers() : Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }
}