import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Meal } from '../model/Meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  meals$: Observable<Meal[]>;
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  /**
   * Sanitizing the youtube link 
   * to load video in an iframe
   * @param link 
   */
  getLink(link: string) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link.replace('watch?v=','embed/'));
  }
  
}
