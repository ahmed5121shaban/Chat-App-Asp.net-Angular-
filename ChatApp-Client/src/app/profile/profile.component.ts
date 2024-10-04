import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ChatBoxComponent } from '../chat-box/chat-box.component';

@Component({
  standalone:true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [MatIconModule,ChatBoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
