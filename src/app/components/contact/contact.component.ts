import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globalconstant } from 'src/app/shared/global-constant';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  responseMessage: any;
  key = environment.emailJSKey;
  serviceId = environment.mailService;
  templateId = environment.templateId;
  toMail: string = 'Andreas';

  contactForm: any = FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(Globalconstant.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(Globalconstant.emailRegex)]],
      subject: [null, [Validators.required, Validators.minLength(10), Validators.pattern(Globalconstant.subjectRegex)]],
      message: [null, [Validators.required, Validators.minLength(20), Validators.pattern(Globalconstant.messageRegex)]],
    });
  }

  onSubmit = async (): Promise<void> => {
    this.isLoading = true;
    try {
      emailjs.init(this.key);
      const formData = this.contactForm.value;
      let response = await emailjs.send(this.serviceId, this.templateId, {
        from_name: formData.name,
        to_name: this.toMail,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      this.router.navigate(['/confirm']);
      this.contactForm.reset();
    } catch (error) {
      this.snackbar.openSnackBar('Failed to send email, please try again.', 'errorSnackbar');
    } finally {
      this.isLoading = false;
    };
  }

}
