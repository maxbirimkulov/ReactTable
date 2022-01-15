const {Router} = require('express');
const route = Router();
const Companies = require('../models/companies');

route.post('/add', async (req, res)=>{
    const addCompanies = new Companies(req.body.companyName, req.body.companyLogo, req.body.description, req.body.employees);
    console.log(req.body);
    await addCompanies.save();
    res.redirect('http://localhost:3000/')
});

module.exports = route;