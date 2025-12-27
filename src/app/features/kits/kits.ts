import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { KitsService } from '../../core/services/kits.service';

@Component({
  selector: 'app-kits',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './kits.html',
  styleUrl: './kits.css',
})
export class Kits {
  private kitsService = inject(KitsService);
  kits$ = this.kitsService.getFeaturedKits(); // Using featured for now as full list
}
