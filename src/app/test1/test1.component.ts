import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    Service1Service
  ],
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  private dataService = inject(Service1Service, {
    optional: false,
    skipSelf: true,
    // self: true,
    host: true
  })

  ngOnInit(){
    console.log("the parnet communication us", this.dataService.name)
  }
}
