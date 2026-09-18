import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile.data';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  profile = PROFILE;

}
