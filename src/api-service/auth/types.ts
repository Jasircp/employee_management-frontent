export interface LoginPayLoad {
    email: string;
    password: string
}

export interface LoginResponse {
    tokenType: string;
    accessToken: string;
}