import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="blog-container">
      <section class="blog-header">
        <h1 class="page-title">Blog & Articles</h1>
        <p class="page-subtitle">
          Insights, tutorials, and write-ups on cybersecurity topics and best practices
        </p>
      </section>

      <div class="articles-grid">
        <article
          *ngFor="let article of articles; let i = index"
          class="article-card"
          [style.animation-delay]="i * 0.1 + 's'"
        >
          <div *ngIf="article.imageUrl" class="article-image">
            <img [src]="article.imageUrl" [alt]="article.title" />
          </div>
          <div class="article-content">
            <div class="article-meta">
              <span class="article-category">{{ article.category }}</span>
              <span class="article-date">{{ formatDate(article.publishDate) }}</span>
              <span class="article-read-time">{{ article.readTime }} min read</span>
            </div>
            <h2 class="article-title">{{ article.title }}</h2>
            <p class="article-excerpt">{{ article.excerpt }}</p>
            <a [routerLink]="['/blog', article.id]" class="read-more">Read More →</a>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [
    `
      .blog-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        min-height: calc(100vh - 80px);
      }

      .blog-header {
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

      .articles-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
      }

      .article-card {
        background: var(--card-bg);
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        animation: fadeInUp 0.6s ease backwards;
        border: 1px solid var(--border-color);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .article-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        border-color: var(--primary-color);
      }

      .article-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        background: var(--secondary-color);
      }

      .article-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .article-card:hover .article-image img {
        transform: scale(1.05);
      }

      .article-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
      }

      .article-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
      }

      .article-category {
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: 500;
      }

      .article-date,
      .article-read-time {
        color: var(--text-secondary);
      }

      .article-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
      }

      .article-excerpt {
        color: var(--text-secondary);
        line-height: 1.6;
        flex: 1;
      }

      .read-more {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
      }

      .read-more:hover {
        color: var(--primary-hover);
        text-decoration: underline;
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

        .articles-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class BlogComponent implements OnInit {
  articles: Article[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.articles = this.dataService.getArticles();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

