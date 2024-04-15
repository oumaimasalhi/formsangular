import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent {


dataList=[
  {name:"oumaima", code:"165",country:"tunisia"},
  {name:"ahmed", code:"569",country:"Maroc"},
  {name:"zeineb", code:"987",country:"Algeria"}
]
active = true ;
constructor( private router:Router){}

GoToUser(){
  this.router.navigate(['/user']);
}



}
