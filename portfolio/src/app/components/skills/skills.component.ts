import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills-container">
      <section class="skills-header">
        <h1 class="page-title">Skills & Expertise</h1>
        <p class="page-subtitle">
          A comprehensive overview of my cybersecurity skills and technical competencies
        </p>
      </section>

      <section class="skills-grid">
        <div
          *ngFor="let skill of skills(); let i = index"
          class="skill-card"
          [style.animation-delay]="i * 0.1 + 's'"
        >
          <div class="skill-icon">{{ getSkillIcon(skill) }}</div>
          <h3 class="skill-name">{{ skill }}</h3>
        </div>
      </section>

      <section class="skills-categories">
        <div class="category-section">
          <h2 class="category-title">Security Domains</h2>
          <div class="category-skills">
            <span
              *ngFor="let skill of getSecuritySkills()"
              class="skill-badge skill-badge-primary"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="category-section">
          <h2 class="category-title">Technical Skills</h2>
          <div class="category-skills">
            <span
              *ngFor="let skill of getTechnicalSkills()"
              class="skill-badge skill-badge-secondary"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .skills-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        min-height: calc(100vh - 80px);
      }

      .skills-header {
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

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 4rem;
      }

      .skill-card {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        animation: fadeInUp 0.6s ease backwards;
        border: 1px solid var(--border-color);
      }

      .skill-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        border-color: var(--primary-color);
      }

      .skill-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .skill-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
      }

      .skills-categories {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .category-section {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .category-title {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
      }

      .category-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .skill-badge {
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.3s ease;
      }

      .skill-badge-primary {
        background: var(--primary-color);
        color: white;
      }

      .skill-badge-secondary {
        background: var(--secondary-color);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }

      .skill-badge:hover {
        transform: scale(1.05);
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

        .skills-grid {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
        }

        .category-section {
          padding: 1.5rem;
        }
      }
    `,
  ],
})
export class SkillsComponent implements OnInit {
  skills: ReturnType<DataService['getSkills']>;

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }

  ngOnInit(): void {}

  getSkillIcon(skill: string): string {
    const icons: { [key: string]: string } = {
      'Penetration Testing': '🔓',
      'Network Security': '🛡️',
      'Incident Response': '🚨',
      'Vulnerability Assessment': '🔍',
      'Malware Analysis': '🦠',
      'Security Auditing': '📋',
      Cryptography: '🔐',
      'Firewall Configuration': '🔥',
      'SIEM Tools': '📊',
      Forensics: '🔬',
      Python: '🐍',
      'Bash Scripting': '💻',
      'Linux Administration': '🐧',
      Wireshark: '📡',
      Metasploit: '⚔️',
      'Burp Suite': '🎯',
    };
    return icons[skill] || '💡';
  }

  getSecuritySkills(): string[] {
    return this.skills().filter((skill) =>
      [
        'Penetration Testing',
        'Network Security',
        'Incident Response',
        'Vulnerability Assessment',
        'Malware Analysis',
        'Security Auditing',
        'Cryptography',
        'Firewall Configuration',
        'SIEM Tools',
        'Forensics',
      ].includes(skill)
    );
  }

  getTechnicalSkills(): string[] {
    return this.skills().filter((skill) =>
      ['Python', 'Bash Scripting', 'Linux Administration', 'Wireshark', 'Metasploit', 'Burp Suite'].includes(skill)
    );
  }
}

