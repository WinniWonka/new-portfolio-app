import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  redirectToContct = () => {
    window.location.href = '#contact';
  };

  yearsExpNum: number = environment.yearsExp;
}
