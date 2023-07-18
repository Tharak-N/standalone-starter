import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from '../test1/test1.component';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [CommonModule, Test1Component],
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {

  private dataService = inject(Service1Service, {
    optional: false,
    // skipSelf: true,
    // self: true,
    // host: false
  })

  ngOnInit(){
    console.log(this.dataService.name)
  }

}
