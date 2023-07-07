const router = require("express").Router();
const { Game } = require("../../models");

router.get('/top20', async (req, res) => {
    try {
        const gameData = await Game.findAll({
        order: [['metacritic', 'DESC']],
        });

        const games = gameData.map((project) => project.get({ plain: true }));

        res.render('topgames', {
        games,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/eldenring", (req, res) => {
    res.render("eldenring");
});

router.get("/hogwarts", (req, res) => {
    res.render("hogwarts");
});

module.exports = router;