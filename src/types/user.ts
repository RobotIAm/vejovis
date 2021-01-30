export enum UserRole {
    DOCTOR = 1,
    PATIENT = 0
}

export interface User {
    username: string;
    password: string;
    user_type: UserRole;
}