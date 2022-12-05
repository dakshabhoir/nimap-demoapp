import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  signupForm: any;
  message:string='';
  className='d-none';
  isProcess:boolean=false;
  constructor (private fb:FormBuilder,private auth:AuthService){ 
this.registerForm=this.fb.group({
  'displayName':['', Validators.required],
  'email':['', Validators.required],
  'password':['', Validators.required]
  
})

  }

  ngOnInit():void{

  }
  registered(){
    this.isProcess=true;
    const data = this.signupForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res=>{
      if(res.success){
        this.isProcess = false;
        this.message="Account has been created";
        this.className='alert alert-success';
      }else{
        this.isProcess = false;
        this.message=res.message;
        this.className='alert alert-danger';
      }


      //this.signupForm.reset();
    },err=>{
      this.isProcess = false;
      this.message="server Error";
      this.className='alert alert-danger';
    })
  }

}
