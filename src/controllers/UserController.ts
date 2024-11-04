import { IUser } from "@/interfaces";

import { RessourceGuard } from "@/guards";

import { UserDto, CreateUserDto, RoleDto } from "@/dtos";

import { 
    Body, 
    Controller, 
    UseGuards,
    Delete, 
    Get, 
    Inject, 
    Param, 
    Post, 
    Put, 
} from "@nestjs/common";


@Controller("user")
export class UserController {
    constructor(
        @Inject("USER_PROVIDER") private I_User: IUser
    ) {}


    @Get()
    @UseGuards(RessourceGuard)
    getAllUsers(): Promise<UserDto[]> {
        return this.I_User.getAllUsers();
    }
    
    @Get(":id")
    getUserById(@Param("id") id: string): Promise<UserDto> {
        return this.I_User.getUserById(id);
    }

    @Put(":id")
    editUser(@Param("id") id: string, @Body() user: UserDto): Promise<void> {
        return this.I_User.editUser(id, user);
    }
    
    @Put(":id/role")
    assignRole(
        @Param("id") userId: string, 
        @Body() role: RoleDto
    ): Promise<void> {
        return this.I_User.assignRole(userId, role);
    }


    @Delete(":id")
    deleteUser(@Param("id") id: string): Promise<void> {
        return this.I_User.deleteUser(id);
    }
}