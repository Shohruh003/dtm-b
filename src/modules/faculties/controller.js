import model from './model.js'


const GET = async (req, res) => {
    try {
        console.log(req.params,req.query)
        const faculties = await model.GET(req.params,req.query)
        res.send(faculties)
    } catch (error) {
        console.error(error);
    }
}

export default {
  GET,
};