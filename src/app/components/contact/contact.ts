import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { PROFILE } from '../../data/profile.data';

@Component({
  imports: [SectionHeader],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  profile = PROFILE;
}
