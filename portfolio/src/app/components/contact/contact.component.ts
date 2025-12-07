import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactMessage } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-container">
      <section class="contact-header">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Have a question or want to collaborate? Feel free to reach out!
        </p>
      </section>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">💼</div>
            <div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                >linkedin.com/in/yourprofile</a
              >
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🐙</div>
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                >github.com/yourusername</a
              >
            </div>
          </div>
        </div>

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <div class="form-group">
            <label for="name">Name *</label>
            <input
              type="text"
              id="name"
              formControlName="name"
              class="form-control"
              [class.error]="isFieldInvalid('name')"
            />
            <div *ngIf="isFieldInvalid('name')" class="error-message">
              Name is required
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="form-control"
              [class.error]="isFieldInvalid('email')"
            />
            <div *ngIf="isFieldInvalid('email')" class="error-message">
              <span *ngIf="contactForm.get('email')?.hasError('required')">Email is required</span>
              <span *ngIf="contactForm.get('email')?.hasError('email')">Invalid email format</span>
            </div>
          </div>

          <div class="form-group">
            <label for="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              formControlName="subject"
              class="form-control"
              [class.error]="isFieldInvalid('subject')"
            />
            <div *ngIf="isFieldInvalid('subject')" class="error-message">
              Subject is required
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              formControlName="message"
              rows="6"
              class="form-control"
              [class.error]="isFieldInvalid('message')"
            ></textarea>
            <div *ngIf="isFieldInvalid('message')" class="error-message">
              Message is required
            </div>
          </div>

          <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || isSubmitting">
            <span *ngIf="!isSubmitting">Send Message</span>
            <span *ngIf="isSubmitting">Sending...</span>
          </button>

          <div *ngIf="submitMessage" [class]="'submit-message ' + (submitSuccess ? 'success' : 'error')">
            {{ submitMessage }}
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        min-height: calc(100vh - 80px);
      }

      .contact-header {
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

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
        align-items: start;
      }

      .contact-info {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .contact-info h2 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 2rem;
      }

      .info-item {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .info-icon {
        font-size: 2rem;
        flex-shrink: 0;
      }

      .info-item h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 0.5rem 0;
      }

      .info-item p,
      .info-item a {
        color: var(--text-secondary);
        text-decoration: none;
        margin: 0;
      }

      .info-item a:hover {
        color: var(--primary-color);
        text-decoration: underline;
      }

      .contact-form {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group label {
        display: block;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .form-control {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        font-family: inherit;
        background: var(--bg-primary);
        color: var(--text-primary);
        transition: border-color 0.3s ease;
      }

      .form-control:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .form-control.error {
        border-color: #e74c3c;
      }

      .error-message {
        color: #e74c3c;
        font-size: 0.875rem;
        margin-top: 0.5rem;
      }

      .btn {
        padding: 0.75rem 2rem;
        border-radius: 8px;
        border: none;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
      }

      .btn-primary {
        background: var(--primary-color);
        color: white;
      }

      .btn-primary:hover:not(:disabled) {
        background: var(--primary-hover);
        transform: translateY(-2px);
      }

      .btn-primary:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .submit-message {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
      }

      .submit-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }

      .submit-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }

      @media (max-width: 768px) {
        .page-title {
          font-size: 2rem;
        }

        .contact-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      const message: ContactMessage = this.contactForm.value;

      this.contactService.sendMessage(message).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.submitMessage = response.message;
          this.contactForm.reset();
          setTimeout(() => {
            this.submitMessage = '';
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitSuccess = false;
          this.submitMessage = 'Failed to send message. Please try again later.';
          console.error('Error sending message:', error);
        },
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}

