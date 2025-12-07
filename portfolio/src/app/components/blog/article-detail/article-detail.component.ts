import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="article-detail-container">
      <button routerLink="/blog" class="back-button">← Back to Blog</button>
      <article *ngIf="article" class="article">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-category">{{ article.category }}</span>
            <span class="article-date">{{ formatDate(article.publishDate) }}</span>
            <span class="article-read-time">{{ article.readTime }} min read</span>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
        </header>
        <div class="article-content">
          <p class="article-excerpt">{{ article.excerpt }}</p>
          <div class="article-body">
            <p>
              {{ article.content || 'Full article content would be displayed here. This is a placeholder for the complete article text.' }}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </article>
      <div *ngIf="!article" class="not-found">
        <h2>Article not found</h2>
        <p>The article you're looking for doesn't exist.</p>
        <a routerLink="/blog" class="btn btn-primary">Back to Blog</a>
      </div>
    </div>
  `,
  styles: [
    `
      .article-detail-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
        min-height: calc(100vh - 80px);
      }

      .back-button {
        background: transparent;
        border: 2px solid var(--border-color);
        color: var(--text-primary);
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }

      .back-button:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .article {
        background: var(--card-bg);
        padding: 3rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .article-header {
        margin-bottom: 2rem;
      }

      .article-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 1rem;
      }

      .article-category {
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: 500;
      }

      .article-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0;
        line-height: 1.2;
      }

      .article-content {
        line-height: 1.8;
      }

      .article-excerpt {
        font-size: 1.2rem;
        color: var(--text-secondary);
        font-style: italic;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
      }

      .article-body {
        color: var(--text-primary);
      }

      .article-body p {
        margin-bottom: 1.5rem;
      }

      .not-found {
        text-align: center;
        padding: 4rem 2rem;
      }

      .not-found h2 {
        font-size: 2rem;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .not-found p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
      }

      .btn {
        padding: 0.75rem 2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
        transition: all 0.3s ease;
      }

      .btn-primary {
        background: var(--primary-color);
        color: white;
      }

      .btn-primary:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
      }

      @media (max-width: 768px) {
        .article {
          padding: 2rem 1.5rem;
        }

        .article-title {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.article = this.dataService.getArticle(+id);
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

