import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { MySystemComponent } from './my-system/my-system.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouterModule, Routes } from '@angular/router';
import { OmniPageComponent } from './omni-page/omni-page.component';

/*import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
*/
const routes: Routes = [
  // basic routes
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: OmniPageComponent },
{ path: 'collection', component: ViewPdfComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProjectsComponent,
    MySystemComponent,
    ContactMeComponent,
    WorkExperienceComponent,
    ViewPdfComponent,
    OmniPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PdfViewerModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
