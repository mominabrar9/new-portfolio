import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/services/data-service/data.service';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  tabs = Tabs;
  dataService: DataService;

  constructor(
    private clipboardService: ClipboardService,
    private toastr: ToastrService,
    dataService: DataService) {

    this.dataService = dataService;
  }

  refreshPage(): void {
    window.location.reload();
  }

  tabHeaderChange(tab: Tabs) {
    this.dataService.selectedTab = tab;
  }

  copyEmail() {
    this.clipboardService.copy('mominabrar9@gmail.com');
    this.toastr.success('', 'Email copied', {
      timeOut: 2000,
    });
  }
}
