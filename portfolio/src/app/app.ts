import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  template: `
    <app-navbar />
    <main class="main-content">
      <router-outlet />
    </main>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Cybersecurity Portfolio. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a routerLink="/contact">Contact</a>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .main-content {
        min-height: calc(100vh - 160px);
      }

      .footer {
        background: var(--card-bg);
        border-top: 1px solid var(--border-color);
        padding: 2rem 1rem;
        margin-top: 4rem;
      }

      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .footer-content p {
        color: var(--text-secondary);
        margin: 0;
      }

      .footer-links {
        display: flex;
        gap: 1.5rem;
      }

      .footer-links a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .footer-links a:hover {
        color: var(--primary-color);
      }

      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column;
          text-align: center;
        }
      }
    `,
  ],
})
export class App {
  currentYear = new Date().getFullYear();
}
