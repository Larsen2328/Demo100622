import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {

  titreApp?: string;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle() {
    this.service.getTitle().subscribe(data => this.titreApp = data);
  }

}
