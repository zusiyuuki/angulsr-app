import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   errors:any =[]
    constructor(
        private authSservice:AuthService,
        private router: Router
        ) { }

    ngOnInit() {}
    login(loginForm){
        this.authSservice.login(loginForm.value).subscribe(
            (token)=>{
                this.router.navigate(['/products'])
            },
            (err:HttpErrorResponse)=>{
                console.error(err)
                this.errors= err.error.errors
            }
        )
    }
}
