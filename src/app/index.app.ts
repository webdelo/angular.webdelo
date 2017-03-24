import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import 'rxjs/Rx';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {UnauthorizedComponent} from "./core/authorization/unautorized.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotFoundComponent} from "./core/notFound.component";
import {HeaderComponent} from "./dashboard/header.component";
import {LandingComponent} from "./landing.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./dashboard/footer.component";
import {FromNowPipe} from "./core/pipes/fromNow.pipe";
import {CalendarPipe} from "./core/pipes/calendar.pipe";
import {DatePipe} from "./core/pipes/date.pipe";
import {SmartDatePipe} from "./core/pipes/smartDate.pipe";
import {Ng2PaginationModule} from "ng2-pagination";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {DndModule} from 'ng2-dnd';
import {ToastyModule} from 'ng2-toasty';
import {SignInComponent} from "./core/authorization/component/signIn.component";
import {MnFullpageDirective} from "ng2-fullpage/ng2-fullpage";
import {HomeComponent} from "./landing/home.component";
import {TypeItComponent} from "./plugins/typeit.component";
import "countup";
import {CountUpComponent} from "./plugins/countup.component";
import {HowDoWeWorkComponent} from "./landing/howDoWeWork.component";
import {DevelopingProcessComponent} from "./diagrams/developingProcess.component";
import {DeploymentProcessComponent} from "./diagrams/deploymentProcess.component";
import {EvaluationProcessComponent} from "./diagrams/evaluationProcess.component";
import {EvaluationComponent} from "./landing/evaluation.component";
import {ProjectDevelopmentComponent} from "./landing/projectDevelopment.component";
import {DevelopmentComponent} from "./landing/development.component";
import {DeploymentComponent} from "./landing/deployment.component";
import {ProjectProcessComponent} from "./diagrams/projectProcess.component";

const appRoutes: Routes = [
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', component: LandingComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    declarations: [
        IndexComponent,
        UnauthorizedComponent,
        DashboardComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        LandingComponent,
        SignInComponent,
        HomeComponent,
        HowDoWeWorkComponent,
        TypeItComponent,
        CountUpComponent,
        DatePipe,
        SmartDatePipe,
        CalendarPipe,
        FromNowPipe,
        MnFullpageDirective,
        DevelopingProcessComponent,
        DeploymentProcessComponent,
        EvaluationProcessComponent,
        ProjectProcessComponent,
        EvaluationComponent,
        ProjectDevelopmentComponent,
        DevelopmentComponent,
        DeploymentComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        Ng2PaginationModule,
        ToastyModule.forRoot(),
        DndModule.forRoot(),
        SlimLoadingBarModule.forRoot()
    ],
    bootstrap: [
        IndexComponent
    ]
})
export class IndexModule { }
