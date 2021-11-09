import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../_services/booking.service';
import { Theater } from '../theater';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
@Injectable()
export class TheaterComponent implements OnInit {

  theaters: any = [];
  showings: any = [];

  constructor(public bookingService: BookingService) {
    this.bookingService.getTheaters().subscribe((res: {}) => {
      this.theaters = res;
    })
  }
// Need to figure out how to get theaterId on submit
  onSubmit(theaterId: number){
    this.bookingService.getShowingsbyId(theaterId).subscribe((res: {}) => {
      this.showings = res;
    })
  } 

  ngOnInit(): void {
  }

}
