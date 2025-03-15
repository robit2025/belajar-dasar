import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public app!: string;
  public link!: string;

  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.app = 'app2' as string;
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
