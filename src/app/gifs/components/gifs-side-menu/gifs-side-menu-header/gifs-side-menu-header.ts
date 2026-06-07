import { Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',
  standalone: true,
})
export class GifsSideMenuHeader {

  /**Colocar del environment de producción */
  envs = environment

}
