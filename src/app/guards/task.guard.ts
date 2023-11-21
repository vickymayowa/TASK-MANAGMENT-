import { CanActivateFn } from '@angular/router';

export const taskGuard: CanActivateFn = (route, state) => {
  return true;
};
