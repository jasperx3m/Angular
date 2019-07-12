// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
import { Component } from '@angular/core';

@Component({//decorator
  selector:'pm-root',//selector
  templateUrl: './app.component.html'
  
})  

export class AppComponent{
  title: string="Hello World";
}
