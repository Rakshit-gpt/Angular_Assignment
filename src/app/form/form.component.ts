import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public title = 'Employee details Form';
  loginUser(item: any) {
    console.log(item);
  }
  empModel = new Emp('Rakshit', 'Agra', 8541621210, new Date('25/09/1999'), '2509rakshitgupta@gmail.com');


  ngOnInit(): void {
  }

}

