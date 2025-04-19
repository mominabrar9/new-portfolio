import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedTab: Tabs = Tabs.s;
  tabs = Tabs;

  constructor(
    private clipboardService: ClipboardService,
    private toastr: ToastrService) { }

  refreshPage(): void {
    window.location.reload();
  }

  copyEmail() {
    this.clipboardService.copy('mominabrar9@gmail.com');
    this.toastr.success('', 'Email copied', {
      timeOut: 2000,
    });
  }
}
