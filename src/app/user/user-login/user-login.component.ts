import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  loginForm!: FormGroup;
 
 constructor(private fb:FormBuilder, private authService: AuthService, private router:Router){}
 
 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })  

  }
 


loginProcess(){
if (this.loginForm.valid){
  this.authService.login(this.loginForm.value).subscribe((result: any) => {

    if(result){
      console.log('login values =>', result);
      localStorage.setItem('token',result.accessToken);
      localStorage.setItem('user',JSON.stringify(result.data));
      // alert('login sucessfully');  
      this.router.navigateByUrl('/list');
    }else{
      alert(result);
    }
  });
                                
}
}
}
