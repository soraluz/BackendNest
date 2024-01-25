import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  users :any
  constructor(private readonly appService: AppService) {
    this.users=[
      {
        id:1,
        name:'a',
        surname:'a',
        age:18
      },
      {
        id:2,
        name:'b',
        surname:'b',
        age:18
      },    
    {
      id:3,
      name:'c',
      surname:'c',
      age:18
    },
  {
    id:4,
    name:'d',
    surname:'d',
    age:18
  },
  {
    id:5,
    name:'e',
    surname:'e',
    age:18
  }
]
}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
/* 
 @Get("/api/users")
 getUsers():any {
  return this.users
 }

 @Get("/api/users/qty")
 getUsersQty():any {
  return this.users.length
 }
//Con params

 @Get("/api/users/:id")
 getUsersById(@Param('id') id):any {
  return this.users.find((user)=> user.id==id)
 }

 @Post('/api/users')
  addUser(@Body() user: any):any{

    const {name,surname,age}= user

    if(!name || !surname || !age){
      throw new BadRequestException("Invalid data")
    }

    const newUser={
      id:this.users.length+1,
      name:name,
      surname:surname,
      age:age
    }

    this.users.push(newUser)
    return newUser

  } */
 
}
