const express = require("express");
const {
    store
} = require("../controllers/profile.controller");
const { 
    validateProfileStore,
    validateProfileUpdate
} = require("../validators/profile.validator");
const { ensureAuth }  = require("../middleware/user.auth");

const api = express.Router();

api.post("/users/:id/profile", ensureAuth, validateProfileStore, store);

module.exports = api;