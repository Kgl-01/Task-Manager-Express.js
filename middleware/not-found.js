const notFound = (req,res)=>{
    res.status(404).send(`Route does not exist.<a href='/'>Home</a>`);
}

module.exports = notFound;