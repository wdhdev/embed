module.exports = async (req, res) => {
    const embed = {
        title: req.query.title,
        description: req.query.description,
        image: req.query.image
    }

    res.status(200).render("embed", { embed: embed });
}
