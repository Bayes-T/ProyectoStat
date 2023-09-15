import { Component, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Stat } from '../../interfaces/stats.interfaces';
import { StatService } from '../../services/stat.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiYmF5ZXN0IiwiYSI6ImNsbGY5ejRhbzBwOXgzZnJ5dmMxZjdlb2wifQ.FNilz3qXMDngWvJsmaZKoA'




@Component({
  selector: 'app-infodetail',
  templateUrl: './infodetail.component.html',
  styleUrls: ['./infodetail.component.css']
})
export class InfodetailComponent implements AfterViewInit, OnInit, OnDestroy{

  constructor(private StatService:StatService, private route: ActivatedRoute){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.map = new mapboxgl.Map({
        container: this.divMap!.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.stat?.place, // starting position [lng, lat]
        zoom: 10, // starting zoom
        });
    
    }, 500);
  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap( ({id}) => this.StatService.getStat(id)),
      map(stat => {
        if(typeof stat?.place == 'string'){
          let arr = JSON.parse(stat.place)
          stat.place = arr
          return stat
        } else return stat
      })
    )
    .subscribe(resp => this.stat = resp)

  }

  ngOnDestroy(): void {
    this.divMap?.nativeElement.remove() 
}


public map?:mapboxgl.Map

 @ViewChild('map') divMap!: ElementRef;

  public stat?:Stat = {
    id: '',
    name: '',
    institution: '',
    topics: [],
    maininterest: '',
    bithplace: '',
    place: [0, 0]
  }



}
