
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})

export class AppComponent {
  public currUrl: string = '';
  public appPage = [
    { title: 'App 1', url: '/app1', icon: 'mail' },
  ];
  
  public appPilihan = [
    { title: 'App 1', url: '/app1', icon: 'mail' },
    { title: 'App 2', url: '/app2', icon: 'mail' },
  ];
    public app1Pages = [
    { title: 'Login', url: '/app1/login_page', icon: 'mail' },
    { title: 'Inbox', url: '/app1/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/app1/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/app1/favorites', icon: 'heart' },
    { title: 'Archived', url: '/app1/archived', icon: 'archive' },
    { title: 'Trash', url: '/app1/trash', icon: 'trash' },
    { title: 'Spam', url: '/app1/spam', icon: 'warning' },
  ];
  public app2Pages = [
    { title: 'Login', url: '/app2/login_page', icon: 'mail' },
    { title: 'Inbox', url: '/app2/inbox', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
  ngOnInit() {
    // Mengakses parameter rute
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currUrl = event.url.split('/')[1];
        this.setAppPage(this.currUrl);
      }
    });


  }
  setAppPage(url: string) {
    if (url == 'app1') {
      this.appPage = this.app1Pages; // Mengisi dengan nilai dari app1Page
    } else if (url == 'app2') {
      this.appPage = this.app2Pages; // Mengisi dengan nilai dari app2Page
    } else {
      this.appPage = [
        { title: 'App 1', url: '/app1', icon: 'mail' },
        { title: 'App 2', url: '/app2', icon: 'mail' },
      ]; // Atur ke array kosong jika tidak ada kecocokan
    }
  }
}
