import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NAVBAR_ANIMATION } from 'src/app/animations/navbar.animation';
import { User } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [NAVBAR_ANIMATION],
})
export class LoginComponent implements OnInit, OnDestroy {

  hide: boolean = true;
  loginForm: FormGroup;
  private readonly unsubscribe$: Subject<void> = new Subject<void>()

  constructor(private readonly loginService: LoginService, private readonly router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });


  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  hasError(controlName: string, errorName: string): boolean { return this.loginForm.controls[controlName].hasError(errorName); }

  accedi(): void {
    const user: User = this.loginForm.value
    this.loginService.accedi(user)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (res: any)=>{
        console.log("utente accede");
        this.router.navigate(['studente/dashboard'])
      },
      error: (res: any)=>{
        console.log(res);
      }
    })

  }
}
