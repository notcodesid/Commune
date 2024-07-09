type AuthStateType = {

    email ?: string;
    name ?: string;
    username ?: string;
    password ?: string;
    password_conformation ?: string;

}
type AuthErrorType = {
    name?: string
    email? : string
    password? : string
}