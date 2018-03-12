import user from "../controllers/user";
export default (app) => {

    /* Routes for add user */

    app.route("/user/addUser").post(user.addUser);
    app.route("/user/getAllUser").get(user.getAllUser);

    return app;
};