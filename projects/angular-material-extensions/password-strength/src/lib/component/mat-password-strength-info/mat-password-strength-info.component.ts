import {Component, Input, OnInit} from '@angular/core';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';
import {transition, trigger, useAnimation} from '@angular/animations';
import {shake} from '../../animations/index';

@Component({
  selector: 'mat-password-strength-info',
  exportAs: 'matPasswordStrengthInfo',
  templateUrl: './mat-password-strength-info.component.html',
  styleUrls: ['./mat-password-strength-info.component.scss'],
  animations: [
    // https://stackoverflow.com/a/50791299/6716264
    trigger('noShakeOnRender', [
      transition(':enter', [])
    ]),
    trigger('negativeState', [
      transition(':enter', useAnimation(shake)),
    ]),
  ],
})
export class MatPasswordStrengthInfoComponent implements OnInit {

  @Input()
  passwordComponent: MatPasswordStrengthComponent;

  @Input()
  enableScoreInfo = false;

  @Input()
  lowerCaseCriteriaMsg = 'contains at least one lower character';

  @Input()
  upperCaseCriteriaMsg = 'contains at least one upper character';

  @Input()
  digitsCriteriaMsg = 'contains at least one digit character';

  @Input()
  specialCharsCriteriaMsg = 'contains at least one special character';

  @Input()
  customCharsCriteriaMsg = 'contains at least one custom character';

  @Input()
  minCharsCriteriaMsg: string;

  @Input()
  matIconDone = 'done';

  @Input()
  matIconError = 'error';

  ngOnInit(): void {
    if (!this.minCharsCriteriaMsg) {
      this.minCharsCriteriaMsg = `contains at least ${this.passwordComponent.min} characters`
    }
  }

}
