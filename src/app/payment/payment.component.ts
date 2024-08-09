import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  public remainingTime: string = '00:00';
  private endTime: Date = new Date(); // Initialize to current date
  private destroy$: Subject<boolean> = new Subject<boolean>();
  loading = true;
  isProcessing = false;

  ngOnInit() {
    this.initializeTimer();
  }

  initializeTimer() {
    
    // After 3 seconds, replace spinner with image
    setTimeout(() => {
      this.loading = false;
    }, 1500);

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
    alert('Time is up! Redirectly to previous page.');
    // You can add any additional logic here, such as redirecting or displaying a message
    this.handleContinue();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleContinue(): void {
    this.isProcessing = true;  // Hide the button and show the spinner

    // Redirect after 2 seconds
    setTimeout(() => this.redirectToExternalLink(), 2000); // 2000ms = 2 seconds
  }

  private redirectToExternalLink(): void {
    this.isProcessing = false; // Hide the spinner
    window.location.href = 'https://calendly.com/rahulbaliastrology/kundli/';  // Replace with your external link
  }

}


