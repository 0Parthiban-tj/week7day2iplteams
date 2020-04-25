import { Component, OnInit } from '@angular/core';
import {teamDetails} from './../team';
import{teams} from './../teams';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})                              
export class TeamsComponent implements OnInit {

  constructor() { }
  iplteam: teamDetails[];
  ngOnInit(): void {
    this.iplteam = teams;
  }

}
