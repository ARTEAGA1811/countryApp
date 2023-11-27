import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "about", component: AboutPageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/home", pathMatch: "full"}
]

@NgModule({
  imports: [
    //Si es el modulo principal se usa forRoot
    //Si es un modulo secundario se usa forChild
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}