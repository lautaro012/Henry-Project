const router = require('express').Router()
const passport = require('passport')
const { Users } = require('../db')
// const { Users } = require('../db')


router.get("/google", passport.authenticate("google", {scope:["profile", "email"]}))
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/"
}))

router.get("/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failed'
    })
})
router.get("/success", (req, res) => {
    if(req.user) {
            return res.status(200).json({
            success: true,
            message: 'success',
            user: req.user
            // cookies: req.cookies
        })
    }
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/")
})



module.exports = router;