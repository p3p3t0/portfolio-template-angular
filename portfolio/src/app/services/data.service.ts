import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { Certification } from '../models/certification.model';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Network Security Scanner',
      description:
        'A comprehensive network security scanning tool that identifies vulnerabilities, open ports, and potential security risks in network infrastructure.',
      technologies: ['Python', 'Nmap', 'SQLite', 'Flask'],
      githubUrl: 'https://github.com/yourusername/network-scanner',
      category: 'Network Security',
    },
    {
      id: 2,
      title: 'Penetration Testing Framework',
      description:
        'Custom penetration testing framework with automated vulnerability assessment and reporting capabilities for web applications.',
      technologies: ['Python', 'Django', 'Selenium', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/pen-test-framework',
      category: 'Penetration Testing',
    },
    {
      id: 3,
      title: 'Incident Response Dashboard',
      description:
        'Real-time security incident monitoring and response dashboard with automated alerting and incident tracking system.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'WebSocket'],
      githubUrl: 'https://github.com/yourusername/incident-response',
      category: 'Incident Response',
    },
    {
      id: 4,
      title: 'Malware Analysis Tool',
      description:
        'Static and dynamic malware analysis tool with sandboxing capabilities for analyzing suspicious files and executables.',
      technologies: ['Python', 'C++', 'Docker', 'YARA'],
      githubUrl: 'https://github.com/yourusername/malware-analyzer',
      category: 'Malware Analysis',
    },
  ];

  private certifications: Certification[] = [
    {
      id: 1,
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      issueDate: '2024-01-15',
      credentialId: 'CEH-12345',
      verificationUrl: 'https://aspen.eccouncil.org/verify',
    },
    {
      id: 2,
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      issueDate: '2023-08-20',
      expiryDate: '2026-08-20',
      credentialId: 'COMP001234567',
      verificationUrl: 'https://www.certmetrics.com/comptia/verification',
    },
    {
      id: 3,
      name: 'CISSP',
      issuer: 'ISC²',
      issueDate: '2023-12-10',
      credentialId: 'CISSP-98765',
      verificationUrl: 'https://www.isc2.org/verify',
    },
    {
      id: 4,
      name: 'OSCP',
      issuer: 'Offensive Security',
      issueDate: '2024-03-05',
      credentialId: 'OSCP-45678',
      verificationUrl: 'https://www.offensive-security.com/verify',
    },
  ];

  private articles: Article[] = [
    {
      id: 1,
      title: 'Understanding SQL Injection Attacks',
      excerpt:
        'A comprehensive guide to SQL injection vulnerabilities, how they work, and best practices for prevention.',
      content: 'Full article content here...',
      publishDate: '2024-01-10',
      category: 'Web Security',
      readTime: 8,
    },
    {
      id: 2,
      title: 'Network Penetration Testing Methodology',
      excerpt:
        'Step-by-step guide to conducting effective network penetration tests and security assessments.',
      content: 'Full article content here...',
      publishDate: '2024-02-15',
      category: 'Penetration Testing',
      readTime: 12,
    },
    {
      id: 3,
      title: 'Incident Response Best Practices',
      excerpt:
        'Essential strategies and procedures for effective cybersecurity incident response and recovery.',
      content: 'Full article content here...',
      publishDate: '2024-03-20',
      category: 'Incident Response',
      readTime: 10,
    },
  ];

  private skills = signal<string[]>([
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
    'Python',
    'Bash Scripting',
    'Linux Administration',
    'Wireshark',
    'Metasploit',
    'Burp Suite',
  ]);

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }

  getCertifications(): Certification[] {
    return this.certifications;
  }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article | undefined {
    return this.articles.find((a) => a.id === id);
  }

  getSkills() {
    return this.skills.asReadonly();
  }
}

