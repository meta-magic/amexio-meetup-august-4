import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data : any[];

  constructor(private router: Router){
    this.data = [{
      'text' : 'Chart Demo',
      'link' : ''
    },{
      'text' : 'Employee',
      'link' : 'emp'
    }]
  }

  onMenuClick(node:any){
    console.log(JSON.stringify(node));
    this.router.navigate([node.data.node.link]);
  }

  onLogoutClick(){
    
  }
}
