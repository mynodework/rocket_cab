import driver from "../controllers/driver";
export default (app) => {
    /* Routes for user */
    app.route("/driver/register").post(driver.register);

    return app;
};