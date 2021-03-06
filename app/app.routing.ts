import { RootComponent } from "./pages/_root/_root.component";
import { BaseComponent } from "./pages/_base/_base.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { SettingsComponent } from "./pages/settings/settings.component";


export const routes = [
  { path: '', component: GalleryComponent },
  { path: 'settings', component: SettingsComponent },
  /*
  { path: 'root', component: RootComponent, children: [
    { path: 'gallery', component: GalleryComponent, outlet: 'rootoutlet' }, 
  ]}, 
  { path: 'base', component: BaseComponent, children: [
    { path: 'gallery', component: GalleryComponent, outlet: 'baseoutlet'},
  ]}
  */
];

export const navigatableComponents = [
  //RootComponent,
  //BaseComponent,
  SettingsComponent,
  GalleryComponent,
]; 
 