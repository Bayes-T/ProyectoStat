import { Component, Input, OnInit } from '@angular/core';
import { Stat } from '../interfaces/stats.interfaces';
import { Router } from '@angular/router';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-statcard',
  templateUrl: './statcard.component.html',
  styleUrls: ['./statcard.component.css']
})
export class StatcardComponent implements OnInit {

  constructor(private router: Router, private statService: StatService) {}
  ngOnInit(): void {

      if(typeof this.stat!.topics == 'string'){
        let array:string[] = []
        array.push(this.stat!.topics)
        this.stat!.topics = array
      } 

  }


  @Input()
  public stat:Stat = {
    id: '',
    name: '',
    institution: '',
    topics: [],
    maininterest: '',
    bithplace: '',
    place: [0,0]
  }

  readMore(){
    //intentar en lugar de con router, porque no estoy definiendo esos url en mi hoja de rutas, intentarlo con una peticion http. Pero seria una peticion aca y otra petición al cargar directamente la página?
    this.router.navigateByUrl('/stats/statdetail/' + this.stat.id)
  }

  onDelete(){
    this.statService.onDelete(this.stat.id)
    .subscribe()
    this.router.navigateByUrl('/stats/stathome')
  }
}

