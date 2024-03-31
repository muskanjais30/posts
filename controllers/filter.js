//for filtering the posts acc to domains

const model = require('../controllers/fiter');

exports.getData = async (req, res) => {
    try {
        const events = await model.find(req.query);
        res.json(events); // Assuming you want to send the events as a JSON response
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' }); // Sending an error response
    }
}
