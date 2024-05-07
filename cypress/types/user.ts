import { Roles } from './roles';

// definicja typu w TypeScript
export interface User {
     username: string,
     firstName: string,
     lastName: string,
     roles: Roles[],
     email: string,
     password: string

}