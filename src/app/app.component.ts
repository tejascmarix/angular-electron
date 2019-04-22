import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron';

  constructor(private electronService: ElectronService) {

  }

  close() {    
    this.electronService.remote.getCurrentWindow().close();
  }
}
