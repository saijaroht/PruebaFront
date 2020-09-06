import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  paises : any []=[];
  constructor(private http:HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((data:any) =>{
        this.paises=data;
        console.log(data)
    })

   }

  ngOnInit(): void {
  }

}
