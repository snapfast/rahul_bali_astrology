import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent implements OnInit, OnDestroy {
  public remainingTime: string = '00:00';
  private endTime: Date = new Date(); // Initialize to current date
  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.initializeTimer();
  }

  initializeTimer() {
    // Set the countdown duration (e.g., 5 minutes)
    const duration = 5 * 60 * 1000; // 5 minutes in milliseconds
    this.endTime = new Date(new Date().getTime() + duration);

    timer(0, 1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      const now = new Date();
      const distance = this.endTime.getTime() - now.getTime();

      if (distance <= 0) {
        this.remainingTime = '00:00';
        this.handleTimeUp();
        this.destroy$.next(true);
        this.destroy$.complete();
      } else {
        const minutes = Math.floor(distance / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.remainingTime = `${this.pad(minutes)}:${this.pad(seconds)}`;
      }
    });
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  handleTimeUp() {
    alert('Time is up! Please complete your payment.');
    // You can add any additional logic here, such as redirecting or displaying a message
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}


