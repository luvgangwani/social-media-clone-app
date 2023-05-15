import ProfilesService from "../services/Profiles";
import { Profile } from "../types";


class ProfilesController {
    profilesService = new ProfilesService();

    getByUsername(username: string) {
        return this
        .profilesService
        .getByUsername(username)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }

    update(profile: Profile) {
        return this
        .profilesService
        .update(profile)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }
}

export default ProfilesController;
