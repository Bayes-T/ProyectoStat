import { Component, ElementRef, ViewChild, PipeTransform } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Stat } from '../interfaces/stats.interfaces';
import { StatService } from '../services/stat.service';
import { TopicsPipe } from '../pipes/topics.pipe';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statnew',
  templateUrl: './statnew.component.html',
  styles: [ `
  label{
    color: white;
    font-size: 16px;
  }
  `
  ]
})
export class StatnewComponent {

  constructor(private fb:FormBuilder, private StatService: StatService, private router:Router){}

  public newStatForm = this.fb.group({
    id: [""],
    name: [""],
    institution: [""],
    topics: [[""]],
    maininterest: [""],
    bithplace: [""],
    place: [[0,0]]
  })

  get newStat():Stat {
    const stat = this.newStatForm.value as Stat
    return stat
  }

  onSave(){
  console.log(this.newStat)
   this.StatService.onNewStat(this.newStat)
   .subscribe(resp=> console.log(resp))
   this.router.navigateByUrl('/stats/stathome')  
  }
}
