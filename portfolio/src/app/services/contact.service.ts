import { Injectable } from '@angular/core';
import { ContactMessage } from '../models/contact.model';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendMessage(message: ContactMessage): Observable<{ success: boolean; message: string }> {
    // In a real application, this would make an HTTP call to your backend
    // For now, we'll simulate an API call
    console.log('Contact message received:', message);

    // Simulate API delay
    return of({ success: true, message: 'Message sent successfully!' }).pipe(delay(1000));
  }
}

