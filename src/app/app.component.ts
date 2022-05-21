import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  submitted=false;
  name="aanchal";
  country="India";
  DOB="08 AUG 1997";
  gender="Female";
 public empData= [{
    empName:"Aanchal",
    gender:"Female",
    country:"India",
    dob:"08 AUG 1997"
  },
  {
   empName:"Seema",
   gender:"Female",
   country:"India",
   Dob:"03 AUG 1987"
 },
 {
   empName:"john",
   gender:"Male",
   country:"USA",
   Dob:"18 jul 2000"
 }
 ]

  constructor(private fb:FormBuilder){
    
  }
  employeeDetail: any;
   
 
  


  ngOnInit(): void {
   this.createform();
  
  }
  createform(){
    this.employeeDetail = this.fb.group({
      name:[],
      gender:[],
      country:[],
      dob:[]
    
    })
    }
onSubmit(){
this.submitted=true;

}
    
   
  
}
