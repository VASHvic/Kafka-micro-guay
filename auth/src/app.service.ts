import { Injectable } from '@nestjs/common';
import { GetuserRequest } from './GetUserRequest.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '111',
      stipeUserId: '666',
    },
    {
      userId: '222',
      stipeUserId: '567',
    },
  ];
  getUser(getUserRequest: GetuserRequest) {
    const user = this.users.find(
      (user) => user.userId === getUserRequest.userId,
    );
    console.log(user);
    return user;
  }
}
