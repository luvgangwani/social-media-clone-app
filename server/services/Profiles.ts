import pool from "../db";
import { Profile } from "../types";

class ProfilesService {
    getByUsername(username: string) {
        return new Promise((resolve, reject) => {
            pool
            .query(
                `select * from vw_profile where username=?`,
                [username],
                (error, results, _fields) => {
                    if (error) reject(error)
                    if (results) {
                        const resultsJson = JSON.parse(JSON.stringify(results));
                        if (resultsJson.length > 0) resolve(resultsJson[0])
                        else resolve({});
                    }
                }
            )
        });
    }

    update(profile: Profile) {
        const { firstName, lastName, username } = profile;
        
        return new Promise((resolve, reject) => {
            pool
            .query(
                'update users set first_name=?, last_name=? where username=?',
                [firstName, lastName, username],
                (error, results, _fields) => {
                    if (error) reject(error)
                    if (results) resolve(results)
                }
            )
        });
    }
}

export default ProfilesService;
