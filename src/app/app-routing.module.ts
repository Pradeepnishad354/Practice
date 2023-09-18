import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard} from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionComponent } from './pages/admin/view-quiz-question/view-quiz-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { UpdateQuizQuestionComponent } from './pages/admin/update-quiz-question/update-quiz-question.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';


const routes: Routes = [

{path:'signup',component:SignupComponent,pathMatch:'full',},

{path:'login',component:LoginComponent,pathMatch:'full'},

{path:'',component:HomeComponent,pathMatch:'full'},

{path:'admin',component:DashboardComponent,canActivate:[AdminGuard]
,children:[

  {
    path:'',
    component:WelcomeComponent,
    pathMatch:'full'
  },
  {
    path:'profile',
    component:ProfileComponent,
    pathMatch:'full'
  },

  {
    path:'category',
    component:ViewCategoryComponent,
    pathMatch:'full'
    
    },
    {
      path:'addcategory',
      component:AddCategoryComponent,
      pathMatch:'full'
      
      },
      {
        path:'update-category/:cid',
        component:UpdateCategoryComponent,
        pathMatch:'full'

      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent,
        pathMatch:'full'
        
        },

        {
          path:'add-quiz',
          component:AddQuizComponent,
          pathMatch:'full'
          
          },
          {
            path:'quiz/:qid',
            component:UpdateQuizComponent,
            pathMatch:'full'
            
            },
            {
              path:'view-questions/:qid/:title',
              component:ViewQuizQuestionComponent,
              pathMatch:'full'
            },
            {
              path:'add-question/:qid/:title',
              component:AddQuestionComponent,
              pathMatch:'full'
              
            },
            {
             path:'update-question/:qid',
             component:UpdateQuizQuestionComponent,
             pathMatch:'full'

            }

]},

{path:'user-dashboard',component:UserDashboardComponent,canActivate:[NormalGuard],


children:[{

  path:':catId',
  component:LoadQuizComponent,
 

},
{

  path:'instructions/:qid',
  component:InstructionsComponent

}

]

},
 
{

  path:'start/:qid',
  component:StartComponent,
  canActivate:[NormalGuard]
}


]


;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
