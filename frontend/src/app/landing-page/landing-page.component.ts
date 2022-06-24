import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  faCamera = faCamera;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onToMyPictures(): void {
    this.router.navigateByUrl('mypictures');
  }
}
