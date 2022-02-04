import { Component } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { CarolAuthService } from '@totvslabs/carol-app-fe-sdk';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent {
  readonly profileActions: PoToolbarAction[] = [
    {
      label: 'Logout',
      action: () => this.carolAuthService.logout()
    }
  ]
  readonly menus: Array<PoMenuItem> = [
    { 
      label: 'Home',
      shortLabel: 'Home',
      icon: 'po-icon-home',
      link: '/'
    },
  ];

  constructor(private carolAuthService: CarolAuthService) {
  }
}