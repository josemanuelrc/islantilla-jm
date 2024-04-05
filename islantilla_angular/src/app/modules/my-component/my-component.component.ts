import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
