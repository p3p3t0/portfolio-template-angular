import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">
          <span class="logo-text">Cybersecurity Portfolio</span>
        </a>
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link" (click)="closeMenu()">Home</a>
          <a routerLink="/skills" routerLinkActive="active" class="nav-link" (click)="closeMenu()">Skills</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link" (click)="closeMenu()">Projects</a>
          <a routerLink="/certifications" routerLinkActive="active" class="nav-link" (click)="closeMenu()">Certifications</a>
          <a routerLink="/blog" routerLinkActive="active" class="nav-link" (click)="closeMenu()">Blog</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link" (click)="closeMenu()">Contact</a>
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
            <span class="theme-icon">{{ themeService.isDarkMode() ? '☀️' : '🌙' }}</span>
          </button>
          <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-label]="'Toggle menu'">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        background: var(--navbar-bg);
        border-bottom: 1px solid var(--border-color);
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-logo {
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .nav-menu {
        display: flex;
        gap: 2rem;
        align-items: center;
      }

      .nav-link {
        text-decoration: none;
        color: var(--text-secondary);
        font-weight: 500;
        transition: color 0.3s ease;
        position: relative;
      }

      .nav-link:hover,
      .nav-link.active {
        color: var(--primary-color);
      }

      .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--primary-color);
      }

      .nav-actions {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .theme-toggle {
        background: transparent;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .theme-toggle:hover {
        border-color: var(--primary-color);
        background: var(--secondary-color);
      }

      .theme-icon {
        font-size: 1.25rem;
      }

      .menu-toggle {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }

      .hamburger {
        width: 25px;
        height: 3px;
        background: var(--text-primary);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .nav-container {
          padding: 1rem;
        }

        .menu-toggle {
          display: flex;
        }

        .nav-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--navbar-bg);
          flex-direction: column;
          padding: 2rem;
          gap: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .nav-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .nav-link.active::after {
          display: none;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

