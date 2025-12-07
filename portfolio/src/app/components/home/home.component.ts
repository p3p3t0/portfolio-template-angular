import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <section class="hero-section">
        <div class="hero-content">
          <div class="profile-image-container">
            <img
              src="https://via.placeholder.com/300x300?text=Your+Photo"
              alt="Profile Photo"
              class="profile-image"
            />
          </div>
          <h1 class="hero-title">John Doe</h1>
          <p class="hero-subtitle">Cybersecurity Student & Ethical Hacker</p>
          <p class="hero-description">
            Passionate cybersecurity student specializing in penetration testing, network security,
            and incident response. Dedicated to protecting digital infrastructure and staying ahead
            of emerging threats.
          </p>
          <div class="hero-actions">
            <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
            <a href="/assets/cv.pdf" download class="btn btn-secondary">Download CV</a>
          </div>
        </div>
      </section>

      <section class="quick-stats">
        <a routerLink="/projects" class="stat-card">
          <div class="stat-number">15+</div>
          <div class="stat-label">Projects</div>
        </a>
        <a routerLink="/certifications" class="stat-card">
          <div class="stat-number">4</div>
          <div class="stat-label">Certifications</div>
        </a>
        <a routerLink="/blog" class="stat-card">
          <div class="stat-number">3</div>
          <div class="stat-label">Articles</div>
        </a>
        <a routerLink="/skills" class="stat-card">
          <div class="stat-number">16</div>
          <div class="stat-label">Skills</div>
        </a>
      </section>
    </div>
  `,
  styles: [
    `
      .home-container {
        min-height: calc(100vh - 80px);
        padding: 2rem 1rem;
      }

      .hero-section {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 4rem 0;
      }

      .profile-image-container {
        margin-bottom: 2rem;
      }

      .profile-image {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--primary-color);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
      }

      .profile-image:hover {
        transform: scale(1.05);
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
        animation: fadeInUp 0.6s ease;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        animation: fadeInUp 0.8s ease;
      }

      .hero-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto 2rem;
        animation: fadeInUp 1s ease;
      }

      .hero-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        animation: fadeInUp 1.2s ease;
      }

      .btn {
        padding: 0.75rem 2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .btn-primary {
        background: var(--primary-color);
        color: white;
      }

      .btn-primary:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      .btn-secondary {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }

      .btn-secondary:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
      }

      .quick-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 4rem auto 0;
      }

      .stat-card {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-decoration: none;
        color: inherit;
        display: block;
        cursor: pointer;
      }

      .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .stat-number {
        font-size: 3rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 1.1rem;
        color: var(--text-secondary);
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
        }

        .quick-stats {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
      }
    `,
  ],
})
export class HomeComponent {}

