import { Injectable} from '@angular/core';

@Injectable()
export class UserService{
    public userID : string = "";
    public accessToken: string = "";
    public userName: string = ""; 
    public userImgURL: string = "";
}