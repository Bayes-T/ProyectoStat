
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Stat } from 'src/app/stats/interfaces/stats.interfaces';



@Component({
    selector: 'app-editDialog',
    templateUrl: './editDialog.component.html'
})

export class editDialog implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<editDialog>,
        @Inject(MAT_DIALOG_DATA) public data: Stat,
        private fb: FormBuilder
      ) {this.stat = data}


    ngOnInit(): void {
        this.editForm = this.fb.group({
            id: [this.stat.id, []],
            name: [this.stat.name, []],
            institution: [this.stat.institution, []],
            topics: [this.stat.topics, []],
            maininterest: [this.stat.maininterest, []],
            bithplace: [this.stat.bithplace, []],
            place: [this.stat.place, []]
        })
    }

    public editForm!: FormGroup;

      public stat:Stat = {
        id: '',
        name: '',
        institution: '',
        topics: [],
        maininterest: '',
        bithplace: '',
        place: [0,0]
      }
    
    onNoClick(): void {
        this.dialogRef.close();
      }

    save() {
      console.log(this.editForm.value)
        this.dialogRef.close(this.editForm.value);
    }


    close() {
        this.dialogRef.close();
    }
}

    
