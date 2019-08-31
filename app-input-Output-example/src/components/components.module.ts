import { NgModule } from "@angular/core";
import { HomeComponent } from './Home/Home.component';
import { HomeChildrenComponent } from './HomeChildren/HomeChildren.component';

@NgModule({
    declarations:[HomeComponent,HomeChildrenComponent],
    exports:[HomeComponent,HomeChildrenComponent]
})

export class MyComponentsModule {}
