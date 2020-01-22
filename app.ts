import { IUserDTO, Dto } from './models';

////////////////////3d task creating model based on DTO
class IUserModel {
    constructor (
            public name: string,
            public password_hash: string,
            public isSuperUser?: boolean,
            public email?: string
        ) {
        this.name = name;
        this.password_hash = password_hash;
        this.isSuperUser = isSuperUser;
        this.email = email;  
    }
  
    create(dto: IUserDTO): IUserModel {
      return new IUserModel(dto.name, dto.password_hash, dto.is_super_user, dto.email);
    }
}

///////////////////////////////////////Task 4 creating an Abstract class and inherited class
abstract class User {
    name: string;
    password_hash: string;
    isSuperUser: boolean;
    email?: string;

    constructor (name: string, password_hash: string, isSuperUser?: boolean, email?: string){
        this.name = name;
        this.password_hash = password_hash;
        this.isSuperUser = isSuperUser;
        this.email = email;  
    }
}

class admin extends User {
    adminID: number;

    constructor(name: string, password_hash: string, adminID, isSuperUser: boolean, email?: string, ){
        super(name, password_hash, isSuperUser, email),
        this.adminID = adminID
    }
}

class simpleUser extends User {
    userId: number;

    constructor(name: string, password_hash: string, userId, isSuperUser: boolean, email?: string, ){
        super(name, password_hash, isSuperUser, email),
        this.userId = userId
    }
}

let IvanAdmin = new admin ('IvanCoolAdmin', '42isTheAnswer', 42, true );
let IvanUser = new simpleUser ('IvanUser', '42Univers', 43, false );

////////////////////Task 5 generic
const dto: Dto <User> = {
    name: 'Ivan',
};

const arrayOfUsers: Array <User> = [IvanAdmin, IvanUser];

function toFilterSuperUsers<User> (array) : User[] {
    return array.filter((data) => {return data.isSuperUser === true})
}



const user = new IUserModel('Ivan', '42', true, '123@gmail.com');

console.log(toFilterSuperUsers(arrayOfUsers))
//console.log(arrayOfUsers);
console.log(IvanAdmin);
console.log(IvanUser);
// console.log(user);
// console.log(dto);


