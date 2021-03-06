import { Component } from '@angular/core';
import { AboutInfo } from './about.model';
import { AboutService } from './about.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'myAbout',
    templateUrl: 'app/about/about.component.html',
    providers: [ AboutService ]
})

export class AboutComponent  {
   
    public aboutInfo: AboutInfo = {};
    public aboutHours = {};

    constructor(private aboutService: AboutService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit () {
        this.activatedRoute.params.subscribe(() => {
            this.aboutService.getAbout().subscribe(
                data => {
                    this.aboutInfo = data;
                    this.aboutHours = data.hours;
                } 
            );
        });
    }
}
