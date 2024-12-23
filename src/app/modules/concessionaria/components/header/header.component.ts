import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public navbarFixed: boolean = false;
  public valorMenu: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }

  public abrirMenu() {
    this.valorMenu = !this.valorMenu;
  }
}
