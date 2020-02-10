import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.component.html',
  styleUrls: ['./list-agenda.component.scss']
})
export class ListAgendaComponent implements OnInit {

  @Input("infoinput") infoinput: any;
  listAgenda : any;
  constructor() { }

  ngOnInit(): void {
    this.listAgenda = this.infoinput;
  }

}
