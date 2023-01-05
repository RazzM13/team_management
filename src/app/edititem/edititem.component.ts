import { Component, Inject } from '@angular/core';
import { EchipeService } from '../echipe.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})

export class EdititemComponent {

  constructor(private echipeService: EchipeService, @Inject(MAT_DIALOG_DATA) public entity: any) {}

  doSave() {
    this.echipeService.persist(this.entity).subscribe();
  }

  doDelete() {
    console.log(this.entity);
    this.echipeService.delete(this.entity).subscribe();
  }

  doRestore() {
    this.echipeService.restore(this.entity).subscribe();
  }

}
