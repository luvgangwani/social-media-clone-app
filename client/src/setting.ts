class Setting {
    // Base url's
    public static API_BASE_URL: string = 'http://localhost:5122/api/v1';

    // Service url's
    public static USERS_SERVICE_URL: string = `${this.API_BASE_URL}/users`;
    public static POSTS_SERVICE_URL: string = `${this.API_BASE_URL}/posts`;
    public static PROFILE_SERVICE_URL: string = `${this.API_BASE_URL}/profiles`;

    // Endpoints
    public static ENDPOINT_GET_USER_BY_USERNAME: string = `${this.USERS_SERVICE_URL}/getUserByUsername`;
    public static ENDPOINT_LOGIN: string = `${this.USERS_SERVICE_URL}/login`;
    public static ENDPOINT_SIGNUP: string = `${this.USERS_SERVICE_URL}/register`;
    public static ENDPOINT_SEARCH: string = `${this.USERS_SERVICE_URL}/search`;
    public static ENDPOINT_POSTS: string = `${this.POSTS_SERVICE_URL}`;
    public static ENDPOINT_PROFILES: string = `${this.PROFILE_SERVICE_URL}`;
}

export default Setting;
