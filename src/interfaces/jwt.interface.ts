export interface JwtInfoInterface{
    /**
     * User ID associated with the JWT.
     */
    user_id: string,

    /**
     * username associated with the JWT.
     */
    username: string,

    /**
     * email associated with the JWT.
     */
    email: string,

    /**
     * Issued At timestamp indicating when the JWT was issued.
     */
    iat: number,

    /**
     * Expiration timestamp indicating when the JWT expires.
     */
    exp: number;
}