import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  personnes: any = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.service.getPersons().subscribe(data => {console.log(data); this.personnes = data});
  }

}
