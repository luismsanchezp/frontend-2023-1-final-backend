const { resource } = require("./resource");

const profileResource = (data) => {
    return resource(data, (data) => {
        return {
            names: data.names,
            lastnames: data.lastnames,
            gender: data.gender,
            birthdate: data.birthdate.toISOString().split("T")[0],
            govIdType: data.govIdType,
            govId: data.govId,
            phoneNumber: data.phoneNumber,
        };
    });
}
module.exports = { profileResource };