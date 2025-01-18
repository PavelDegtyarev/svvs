import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAnchor, MatButton } from '@angular/material/button'
import { MatCard } from '@angular/material/card'

@Component({
  selector: 'lib-ui-component',
  imports: [CommonModule, MatAnchor, MatButton, MatCard],
  templateUrl: './ui-component.component.html',
  styleUrl: './ui-component.component.scss',
  standalone: true,

})
export class UiComponentComponent {}
