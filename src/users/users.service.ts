import {HttpException, HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class UsersService {

    userList: any = [];

    constructor(public readonly httpService: HttpService) {
    }

    findAll(): Observable<any> {
        if (this.userList.length > 0) {
            return Observable.create((observer) => {
                observer.next(this.userList);
                observer.complete();
            });
        }
        return this.httpService.get<any>('https://randomuser.me/api/?results=50&seed=a')
            .pipe(
                map(response => {
                    this.userList = response.data.results;
                    return this.userList;
                }),
            );
    }

    create(user) {
        this.userList.push(user);
        return user;
    }

    remove(id) {
        if (_.find(this.userList, userToDelete => (userToDelete.login.uuid === id))) {
            _.remove(this.userList, userToDelete => (userToDelete.login.uuid === id));
            return {
                id: id
            };
        }
        throw new HttpException('User not exist in database', 404);
    }

    edit(user) {
        for (let i = 0; i < this.userList.length; i++) {
            if (user.login.uuid === this.userList[i].login.uuid) {
                this.userList[i] = user;
                return user;
            }
        }
    }
}
