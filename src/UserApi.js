import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class UserApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        // const headers = { Authorization: `Bearer ${localStorage.getItem(UserApi.token)}` };

        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }


    // Individual API routes


    /* returns current user */
    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }
    static async getUsers() {
        let res = await this.request("users");
        return res;
    }
    static async signup(signupData) {
        console.log("in signup, signupdata is ", signupData)
        let res = await this.request("users", signupData, "post");
        console.log("in signup, res is ", res)
        return res;
    }
    static async login(loginData) {
        let res = await this.request("auth/token", loginData, "post");
        // console.log("in login, res.token is ", res.token)
        return res.token;
    }


    static async saveProfile(username, profileData) {
        let status = await this.checkPassword(username, profileData.password)
        if (status.msg === "Success") {
            let res = await this.request(`users/${username}`, profileData, "patch");
            return res.user;
        }
    }
    static async checkPassword(username, password) {
        let res = await this.request(`auth/checkPassword`, { username, password }, "post")
        return res
    }
}


export default UserApi;
