import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {    

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: '/assets/forms.png',
                price: 99.99,
                code: 'ANG',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2020'
            },
            {
                id: 2,
                name: 'React',
                imageUrl: '/assets/http.png',
                price: 45.99,
                code: 'RCT',
                duration: 120,
                rating: 3.5,
                releaseDate: 'November, 2, 2020'
            }
        ]
    }
}