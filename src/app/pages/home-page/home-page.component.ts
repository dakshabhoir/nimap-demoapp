import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      'email':['', Validators.required],
      'password':['', Validators.required]
      
    })
    

  }

  ngOnInit():void{
    
  }
  login(){
    alert("login success")
  }
}
