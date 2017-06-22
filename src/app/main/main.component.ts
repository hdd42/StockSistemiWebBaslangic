import {ChangeDetectorRef, Component} from '@angular/core';
import { Router } from '@angular/router';
import {TdMediaService} from "@covalent/core";
import {IMenu} from "../../data/AppInterface";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Array<IMenu> ;

  constructor(private _router: Router,  private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService , _menuService:MenuService) {

    this.routes = _menuService.getMenu()
  }

  logout(): void {
    this._router.navigate(['/login']);
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }
}
