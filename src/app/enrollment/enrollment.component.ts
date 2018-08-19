import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  sections = [];
  currentUser = {
    _id: 0,
  };

  constructor(private sectionService: SectionServiceClient,
              private userService: UserServiceClient) {
  }

  enroll = (sectionId) => {
    this.sectionService.enroll(this.currentUser._id, sectionId)
      .then(response => response.json());
  };

  ngOnInit() {
    this.sectionService
      .findAllSections()
      .then(sections => {
        this.sections = sections;
        this.userService.currentUser()
          .then(user => this.currentUser = user);
      });
  }

}
