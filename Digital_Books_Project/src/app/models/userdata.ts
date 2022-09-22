interface Dictionary<T> {
    [Key: string]: T;
}
export class UserData{
    userName:string='';
    userPassword:string='';
    userFullname:string='';
    userType:string='';
    userEmail:string='';
    userMobileNo:string='';
    selectedOption: Dictionary<string> = {};
    isRegister:boolean=false;
}