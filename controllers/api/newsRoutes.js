const router = require("express").Router();
const { News } = require("../../models/");

router.get('/', async (req, res) => {
    try {
        const newsData = await News.findAll({
        });

        const news = newsData.map((title) => title.get({ plain: true }));

        res.render('news', {
        news,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;