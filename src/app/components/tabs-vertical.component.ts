import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
})
@Component({
  selector: 'app-tabs-vertical',
  templateUrl: './tabs-vertical.component.html',
  styleUrls: ['./tabs-vertical.component.scss']
})
export class TabsVerticalComponent implements OnInit {
  selected: string;
  constructor() { }

  ngOnInit() {
  }
  showSelected(item) {
     this.selected = item;
     console.log(`Item ${item} was Selected`);
  }
}
