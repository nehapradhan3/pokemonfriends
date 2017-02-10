import { Component } from '@angular/core';

const HEROES=[
  {id:1, name:'Hasna',p:'100', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDheiAlNVhUP9TiwWnGHkeWPNgyNcKgzBhsFDUBKlCSFKyWFV'},
{id:2, name:'Neelam', p:'100',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOUEFzVvKGZwCVFzQeNxcAhJN-XhWXPt-njJ5xg_FeXbNDKzIjg'},
{id:3, name:'Pundarika',p:'100',img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcm4vaL1bxHT6SrNHEzsVEa2d-4XfkfudGSEdZiaPpFKHkwHAp'},
{id:3, name:'Saru', p:'100', img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1JzGU4rwyOKbWmsw9gkFU0eWLSkSqI6kHLhxMZBjg37HXcBPD'}
];
@Component({
  selector: 'hey',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes=HEROES;
  title:string;
  name:string;
artists:any;
  constructor (){
  this.title = 'Vday Competition special app!';
    this.name='which pokemon will win the trophy';
    this.artists=[{
    naam:'Neha Pradhan'  ,
    department:'Javascript',
    height:'5ft 5 inch',
  complexion:'dark'}
    ];

  }
}
