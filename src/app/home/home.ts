import { Component } from '@angular/core';
import { Hero } from './ui/hero/hero';
import { HowItWorks } from './ui/how-it-works/how-it-works';
import { CategoryNav } from './ui/category-nav/category-nav';
import { FeaturedKits } from './ui/featured-kits/featured-kits';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, HowItWorks, CategoryNav, FeaturedKits],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
