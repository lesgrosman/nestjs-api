import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'logged in';
  }

  signup() {
    return 'signed in';
  }
}
