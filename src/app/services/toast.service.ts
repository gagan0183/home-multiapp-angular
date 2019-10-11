import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  constructor(private messageService: MessageService) {}

  success(message) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message
    });
  }

  info(message) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message
    });
  }

  warning(message) {
    this.messageService.add({
      severity: 'warning',
      summary: 'Warning',
      detail: message
    });
  }

  error(message) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message
    });
  }
}
