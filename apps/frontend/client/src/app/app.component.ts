import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiComponentComponent } from '@svvs/ui-component'

@Component({
  imports: [RouterModule, UiComponentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'frontend/client'
}
