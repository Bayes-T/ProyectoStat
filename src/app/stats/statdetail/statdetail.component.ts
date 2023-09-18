import { Component, OnInit } from '@angular/core';
import { Stat } from '../interfaces/stats.interfaces';
import { HttpClient } from '@angular/common/http';
import { StatService } from '../services/stat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { editDialog } from '../components/statDialog/statDialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-statdetail',
  templateUrl: './statdetail.component.html',
  styles: [ `
  mat-card {
    height: 600px;
  }
  mat-card img {
    width: 75%;
    height: 400px;
    display: block;
  margin-left: auto;
  margin-right: auto;
  }

  mat-spinner {
    position: relative;
    margin-left: 50%;
    margin-right: 50%;
    margin-top: 50px;
}
  `
  ]
})
export class StatdetailComponent implements OnInit{

  public id = ""
  constructor(private http: HttpClient, private StatService: StatService, private route: ActivatedRoute, private router:Router, private dialog: MatDialog){}

  ngOnInit(): void {

    //Lo que hice acá fue con rxjs hacer que la info que le llegara a la propiedad sea del tipo deseado. Pero lo mejor es que directamente del servidor sea del tipo que yo quiero, o que al crear un nuevo stat tenga restricciones de que sólo con el tipado correcto va a poder crear.
    this.route.params
    .pipe(
      //switch map pasa 
      switchMap(({id}) => this.StatService.getStat(id)),
      //en realidad formcontrol vendría siendo el stat
      map(formcontrol => {
        if(typeof formcontrol!.topics == 'string'){
          let array:string[] = []
          array.push(formcontrol!.topics)
          formcontrol!.topics = array
          
          return formcontrol
        } else {return formcontrol}
      })
    )
    //acá me estoy suscribiendo al getstat!!
    .subscribe(stat => {
      if(!stat) {
        setTimeout(() => {
          return this.router.navigateByUrl('/stats/stathome')
        }, 1000);}
        

      return this.stat = stat })
    }

  public stat?:Stat = {
    id: '',
    name: '',
    institution: '',
    topics: [],
    maininterest: '',
    bithplace: '',
    place: [0,0]
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true
    // dialogConfig.autoFocus = true

    dialogConfig.height = '350px'
    dialogConfig.width = '500px'

    dialogConfig.data = this.stat

    this.dialog.open(editDialog, dialogConfig)


    const dialogRef = this.dialog.open(editDialog, dialogConfig)

    //data la que recibe del form 
    //Dado que hago un nuevo llamado a otro service, hay que darle doble click, como solucionar esto? 
    dialogRef.afterClosed().
    pipe(
        switchMap((data) => this.StatService.onEdit(data))
        )
        .subscribe()
        this.router.navigateByUrl('/stats/statdetail/{{this.stat.id}}')       
  }

  onDelete(){
    this.StatService.onDelete(this.stat!.id)
    .subscribe()
    this.router.navigateByUrl('/stats/stathome')
  }

}
