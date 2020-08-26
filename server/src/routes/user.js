const express = require('express');
const router = express.Router({mergeParams: true});
const controller_user = require('../controller/user_controller');
const check_auth = require('../middleware/check-auth'); 

router.route('/login')
    .post(controller_user.login)

router.route('/')
    .get(controller_user.get_all_users)
    .post(controller_user.create_user)

router.route('/:id')
    .all(check_auth)
    .get(controller_user.get_user)
    .delete(controller_user.delete_user)
    .put(controller_user.update_user)

module.exports = router;