import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { ContentWrapperComponent } from './shared/components/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    ContentWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
