import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollno=""
  admno=""
  mobno=""
  college=""
  parentname=""
  username=""
  password=""

  studentEntry=()=>

  {
    let data:any={"name":this.name,"rollno":this.rollno,"mobno":this.mobno,"college":this.college,"parentname":this.parentname,"username":this.username,"password":this.password}
    console.log(data)
  }

}
