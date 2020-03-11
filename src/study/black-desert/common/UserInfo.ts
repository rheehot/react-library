export default class UserInfo {
    heraldryFame: number;
    haveValuePackage: boolean;

    constructor(heraldryFame = 0, haveValuePackage = false) {
        this.heraldryFame = heraldryFame;
        this.haveValuePackage = haveValuePackage;
    }
}
