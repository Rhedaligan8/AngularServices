import { Component, NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CarmodelListComponent } from './components/carmodel-list/carmodel-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { VegetableListComponent } from './components/vegetable-list/vegetable-list.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { SoftwareListComponent } from './components/software-list/software-list.component';
import { PhonecontactListComponent } from './components/phonecontact-list/phonecontact-list.component';
import { MusicplayListComponent } from './components/musicplay-list/musicplay-list.component';
import { FoodmenuListComponent } from './components/foodmenu-list/foodmenu-list.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { ClassroomListComponent } from './components/classroom-list/classroom-list.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';
import { StationeryListComponent } from './components/stationery-list/stationery-list.component';
import { FlowerListComponent } from './components/flower-list/flower-list.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { LaptopListComponent } from './components/laptop-list/laptop-list.component';
import { LaptopspecsListComponent } from './components/laptopspecs-list/laptopspecs-list.component';
import { ComputerhardwareListComponent } from './components/computerhardware-list/computerhardware-list.component';
import { MobileappListComponent } from './components/mobileapp-list/mobileapp-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { TVshowListComponent } from './components/tvshow-list/tvshow-list.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { AccessoryListComponent } from './components/accessory-list/accessory-list.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ComposerListComponent } from './components/composer-list/composer-list.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { MealplanListComponent } from './components/mealplan-list/mealplan-list.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { DevelopertoolsListComponent } from './components/developertools-list/developertools-list.component';
import { FrameworkListComponent } from './components/framework-list/framework-list.component';
import { LibraryListComponent } from './components/library-list/library-list.component';

const routes: Routes = [
    {path:'', component:StudentListComponent},
    {path:'employeelist', component:EmployeeListComponent},
    {path:'fruitlist',component:FruitListComponent},
    {path:'courselist',component: CourseListComponent},
    {path:'booklist',component: BookListComponent},
    {path:'citylist',component:CityListComponent},
    {path:'movielist',component:MovieListComponent},
    {path:'carmodellist',component:CarmodelListComponent},
    {path:'productlist',component:ProductListComponent},
    {path:'subjectlist',component:SubjectListComponent},
    {path:'countrylist',component:CountryListComponent},
    {path:'sportslist',component:SportsListComponent},
    {path:'vegetablelist',component:VegetableListComponent},
    {path:'animallist',component:AnimalListComponent},
    {path:'toollist',component:ToolListComponent},
    {path:'languagelist',component:LanguageListComponent},
    {path:'gamelist',component:GameListComponent},
    {path:'softwarelist',component:SoftwareListComponent},
    {path:'phonecontactlist',component:PhonecontactListComponent},
    {path:'musicplaylist',component:MusicplayListComponent},
    {path:'foodmenulist',component:FoodmenuListComponent},
    {path:'grocerylist',component:GroceryListComponent},
    {path:'classroomlist',component:ClassroomListComponent},
    {path:'inventorylist',component:InventoryListComponent},
    {path:'lecturelist',component:LectureListComponent},
    {path:'stationerylist',component:StationeryListComponent},
    {path:'flowerlist',component:FlowerListComponent},
    {path:'destinationlist',component:DestinationListComponent},
    {path:'laptoplist',component:LaptopListComponent},
    {path:'laptopspecs',component:LaptopspecsListComponent},
    {path:'computerhardwarelist',component:ComputerhardwareListComponent},
    {path:'mobileapplist',component:MobileappListComponent},
    {path:'videolist',component:VideoListComponent},
    {path:'tvshowlist',component:TVshowListComponent},
    {path:'furniturelist',component:FurnitureListComponent},
    {path:'accessorylist',component:AccessoryListComponent},
    {path:'buildinglist',component:BuildingListComponent},
    {path:'paintinglist',component: PaintingListComponent},
    {path:'artistlist',component:ArtistListComponent},
    {path:'composerlist',component:ComposerListComponent},
    {path:'podcastlist',component:PodcastListComponent},
    {path:'exerciselist',component:ExerciseListComponent},
    {path:'mealplanlist',component:MealplanListComponent},
    {path:'budgetlist',component:BudgetListComponent},  
    {path:'presentationlist',component: PresentationListComponent},
    {path:'tourlist',component: TourListComponent},
    {path:'eventlist',component: EventListComponent},
    {path:'developertoolslist',component:DevelopertoolsListComponent},
    {path:'frameworklist',component:FrameworkListComponent},
    {path:'librarylist',component:LibraryListComponent},
  ]
@NgModule({
    declarations: [
      AppComponent,
      StudentListComponent,
      EmployeeListComponent,
      FruitListComponent,
      CourseListComponent,
      BookListComponent,
      CityListComponent,
      MovieListComponent,
      CarmodelListComponent,
      ProductListComponent,
      SubjectListComponent,
      CountryListComponent,
      SportsListComponent,
      VegetableListComponent,
      AnimalListComponent,
      ToolListComponent,
      LanguageListComponent,
      GameListComponent,
      SoftwareListComponent,
      PhonecontactListComponent,
      MusicplayListComponent,

      
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      RouterModule.forRoot(routes,{enableTracing:true}),
      
     
    ],
    providers: [
      
    ],
    bootstrap: [AppComponent],
    exports: [
      RouterModule
    ]
  })
  export class AppModule {}

