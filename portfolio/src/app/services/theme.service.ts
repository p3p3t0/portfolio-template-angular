import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const isDark = this.isDarkMode();
      this.applyTheme(isDark);
      this.saveTheme(isDark);
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === this.DARK_THEME;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(isDark: boolean): void {
    const theme = isDark ? this.DARK_THEME : this.LIGHT_THEME;
    document.documentElement.setAttribute('data-theme', theme);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private saveTheme(isDark: boolean): void {
    localStorage.setItem(this.THEME_KEY, isDark ? this.DARK_THEME : this.LIGHT_THEME);
  }
}

