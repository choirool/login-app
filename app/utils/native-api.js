import * as nsutils from '@nativescript/core/utils';
import { ios } from '@nativescript/core/application';

export const hideKeyboard = () => {
  if (ios) {
    ios.nativeApp.sendActionToFromForEvent('resignFirstResponder', null, null, null);
  } else {
    nsutils.ad.dismissSoftInput();
  }
};