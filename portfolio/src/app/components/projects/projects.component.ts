import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <section class="projects-header">
        <h1 class="page-title">Projects</h1>
        <p class="page-subtitle">
          Showcasing my cybersecurity projects, tools, and contributions to the security community
        </p>
      </section>

      <div class="projects-grid">
        <div
          *ngFor="let project of projects; let i = index"
          class="project-card"
          [style.animation-delay]="i * 0.1 + 's'"
        >
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <span class="project-category">{{ project.category }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-technologies">
            <span *ngFor="let tech of project.technologies" class="tech-badge">{{ tech }}</span>
          </div>
          <div class="project-actions">
            <a
              [href]="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              View on GitHub
            </a>
            <a
              *ngIf="project.demoUrl"
              [href]="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .projects-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        min-height: calc(100vh - 80px);
      }

      .projects-header {
        text-align: center;
        margin-bottom: 4rem;
      }

      .page-title {
        font-size: 3rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .page-subtitle {
        font-size: 1.2rem;
        color: var(--text-secondary);
        max-width: 600px;
        margin: 0 auto;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
      }

      .project-card {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        animation: fadeInUp 0.6s ease backwards;
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
      }

      .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        border-color: var(--primary-color);
      }

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 1rem;
        gap: 1rem;
      }

      .project-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
        flex: 1;
      }

      .project-category {
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.85rem;
        font-weight: 500;
        white-space: nowrap;
      }

      .project-description {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
        flex: 1;
      }

      .project-technologies {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }

      .tech-badge {
        background: var(--secondary-color);
        color: var(--text-primary);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        border: 1px solid var(--border-color);
      }

      .project-actions {
        display: flex;
        gap: 1rem;
        margin-top: auto;
      }

      .btn {
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        display: inline-block;
        text-align: center;
        flex: 1;
      }

      .btn-primary {
        background: var(--primary-color);
        color: white;
      }

      .btn-primary:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
      }

      .btn-secondary {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }

      .btn-secondary:hover {
        background: var(--primary-color);
        color: white;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .page-title {
          font-size: 2rem;
        }

        .projects-grid {
          grid-template-columns: 1fr;
        }

        .project-header {
          flex-direction: column;
        }

        .project-actions {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}

