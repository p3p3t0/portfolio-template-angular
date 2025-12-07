import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Certification } from '../../models/certification.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="certifications-container">
      <section class="certifications-header">
        <h1 class="page-title">Certifications</h1>
        <p class="page-subtitle">
          Professional certifications and credentials demonstrating expertise in cybersecurity
        </p>
      </section>

      <div class="certifications-grid">
        <div
          *ngFor="let cert of certifications; let i = index"
          class="cert-card"
          [style.animation-delay]="i * 0.1 + 's'"
        >
          <div class="cert-badge">
            <div class="badge-icon">🏆</div>
          </div>
          <div class="cert-content">
            <h3 class="cert-name">{{ cert.name }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <div class="cert-details">
              <div class="cert-detail-item">
                <span class="detail-label">Issued:</span>
                <span class="detail-value">{{ formatDate(cert.issueDate) }}</span>
              </div>
              <div *ngIf="cert.expiryDate" class="cert-detail-item">
                <span class="detail-label">Expires:</span>
                <span class="detail-value">{{ formatDate(cert.expiryDate) }}</span>
              </div>
              <div *ngIf="cert.credentialId" class="cert-detail-item">
                <span class="detail-label">Credential ID:</span>
                <span class="detail-value credential-id">{{ cert.credentialId }}</span>
              </div>
            </div>
            <a
              *ngIf="cert.verificationUrl"
              [href]="cert.verificationUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="verify-link"
            >
              Verify Credential →
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .certifications-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        min-height: calc(100vh - 80px);
      }

      .certifications-header {
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

      .certifications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
      }

      .cert-card {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        animation: fadeInUp 0.6s ease backwards;
        border: 1px solid var(--border-color);
        display: flex;
        gap: 1.5rem;
      }

      .cert-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        border-color: var(--primary-color);
      }

      .cert-badge {
        flex-shrink: 0;
      }

      .badge-icon {
        font-size: 4rem;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-color);
        border-radius: 50%;
        color: white;
      }

      .cert-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .cert-name {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
      }

      .cert-issuer {
        font-size: 1rem;
        color: var(--text-secondary);
        margin: 0;
      }

      .cert-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .cert-detail-item {
        display: flex;
        gap: 0.5rem;
        font-size: 0.9rem;
      }

      .detail-label {
        color: var(--text-secondary);
        font-weight: 500;
      }

      .detail-value {
        color: var(--text-primary);
      }

      .credential-id {
        font-family: monospace;
        background: var(--secondary-color);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
      }

      .verify-link {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        margin-top: 0.5rem;
        transition: color 0.3s ease;
      }

      .verify-link:hover {
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

        .certifications-grid {
          grid-template-columns: 1fr;
        }

        .cert-card {
          flex-direction: column;
          text-align: center;
        }

        .badge-icon {
          margin: 0 auto;
        }
      }
    `,
  ],
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.certifications = this.dataService.getCertifications();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

