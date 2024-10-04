import { Component, OnInit } from '@angular/core';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  standalone:true,
  imports:[MessageBoxComponent],
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
