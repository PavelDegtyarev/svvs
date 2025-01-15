import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';
import { MatAnchor, MatButton } from '@angular/material/button'

@Component({
  imports: [RouterModule, MatCardModule, MatDividerModule, MatButton, MatAnchor],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'frontend/client'
}
