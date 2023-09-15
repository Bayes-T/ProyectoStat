import { Component, OnInit } from '@angular/core';
import { Stat } from '../interfaces/stats.interfaces';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit{

  constructor(private StatService: StatService){}

  ngOnInit(): void {
    this.getStats()
  }



  public stats:Stat[] = []

  getStats(){
    this.StatService.getStats()
    .subscribe(resp => {
      return this.stats = resp})
  }
}
