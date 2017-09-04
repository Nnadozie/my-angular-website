import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { MySystemComponent } from './my-system/my-system.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
/*import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProjectsComponent,
    MySystemComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
