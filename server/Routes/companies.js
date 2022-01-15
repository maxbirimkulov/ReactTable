const {Router} = require('express');
const route = Router();
const Companies = require('../models/companies');

route.get('/companies', async (req, res)=>{
    const companies = await Companies.getAll();
    res.send(companies)
});

route.delete('/delete/:id', async (req, res) => {
    const companies = await Companies.deleteCompany(req.params.id);
    res.send(companies)
});

route.post('/edit/:id', async (req,res) => {
    await Companies.changeCompaniesById(req.body);
    console.log(req);
    res.redirect(`http://localhost:3000/company/${req.body.companyName}`)
});

module.exports = route;