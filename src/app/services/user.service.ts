import { Injectable} from '@angular/core';

@Injectable()
export class UserService{
    public userID : string = "";
    public accessToken: string = "";
    public userName: string = ""; 
    public userImgURL: string = "";
    public imgURL: string = "";
    public gender: string = "";
    public lastTagDate: string = "";
    public citySelected: string= "";
    public regionSelected: string= "";
    public countrySelected: string= "";
}