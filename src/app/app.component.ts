/*
 * @Author: your name
 * @Date: 2021-03-01 16:02:12
 * @LastEditTime: 2021-03-02 17:06:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-first-angular\src\app\app.component.ts
 */
import { Component } from '@angular/core';

// interface {
//   Item: object;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-project';
  title2 = 'my-first-angular-project';
  name = 'your';
  imgSrc = 'https://paystatic.sdoprofile.com/img/logo@1x.png';
  btn1Status = true;
  ngif1 = true;
  noServer = true;
  items = [
    {
      name: '1111'
    },
    {
      name: '222'
    }
  ]

  btn2Handler() {
    this.ngif1 = !this.ngif1;
    this.name = 'my my'
  }

  inputHandler(event:any) {
    console.log((<HTMLInputElement>event.target).value)
    this.name = (<HTMLInputElement>event.target).value

    
  }

  trackByItems(index: number, item: any): number {
    return item.id!;
  }
}
