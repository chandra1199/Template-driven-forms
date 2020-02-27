import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  films = [10,20,30,40,50,60,70,80,90,100];
   dob:Date

  submitted = false;

  onSubmit(){this.submitted = true;}

  
   }





