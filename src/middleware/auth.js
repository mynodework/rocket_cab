export class AuthController {

    // middleware for logged in users
    requiresLogin(req, res, next) {
        
    }
}

const controller = new AuthController();
export default controller;
