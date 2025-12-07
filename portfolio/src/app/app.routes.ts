import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleDetailComponent } from './components/blog/article-detail/article-detail.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: ArticleDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
