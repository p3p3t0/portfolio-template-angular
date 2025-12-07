export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  badgeUrl?: string;
  verificationUrl?: string;
}

