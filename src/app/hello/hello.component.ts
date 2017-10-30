import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',

  template: `    
        <input/>
        <button (click)="toggle()">Toggle</button>
        <span [ngClass] ="{'active': isActive}"> hello {{name}}</span>`,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string = "Archana";
  isActive = true;
  toggle(){
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

  ngOnInit() {
  }

}
