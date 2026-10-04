import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getTopics } from '../../content/course.repository';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div>
        <span class="eyebrow">MATEMÁTICAS · 3.º DE PRIMARIA</span>
        <h1>Piensa, calcula<br /><em>y rompe el reto.</em></h1>
        <p>MathCrack 3.0 te ayuda a entender las matemáticas paso a paso, practicar mucho y mejorar en cada intento.</p>
      </div>
      <div class="hero-card">3×4<span>🧠</span></div>
    </section>
    <section class="content">
      <div class="section-title">
        <div><span>🟠 TU CURSO</span><h2>Elige un tema</h2></div>
        <p>12 unidades siguiendo el temario de Matemáticas de 3.º</p>
      </div>
      <div class="topics">
        @for (topic of topics; track topic.id) {
          <a class="topic-card" [routerLink]="['/tema', topic.id]">
            <div class="number">{{ topic.order }}</div>
            <div class="emoji">{{ topic.emoji }}</div>
            <div class="info"><small>TEMA {{ topic.order }}</small><h3>{{ topic.title }}</h3><p>{{ topic.description }}</p></div>
            <div class="arrow">→</div>
          </a>
        }
      </div>
    </section>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly topics = getTopics();
}
