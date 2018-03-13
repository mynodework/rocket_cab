import user from "../controllers/user";
export default (app) => {

    /* Routes for user */

    app.route("/user/register").post(user.register);

    app.route("/user/login").post(user.login);

    app.route("/user/verifyOTP").post(user.verifyOTP);

    return app;
};