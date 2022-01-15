const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class Companies {
    constructor(name, logo, description, employees) {
        this.companyName = name;
        this.companyLogo = logo;
        this.description = description;
        this.employees = employees;
        this.allCheck = false;
        this.id = uuidv4()
    }

    toJson () {
        return {
        companyName :this.companyName,
        companyLogo : this.companyLogo,
        description : this.description,
        employees : this.employees,
        allCheck : this.allCheck,
        id : this.id
        }
    }

    async save() {
        let get = await Companies.getAll();
        get = [...get, this.toJson()];
        return new Promise((resolve, reject)=>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'companies.json'),
                JSON.stringify(get),
                (err) => {
                    if (err){
                        reject(err)
                    } else{
                        resolve()
                    }
                }
            )
        })
    }
    static async deleteCompany (id) {
        let all = await Companies.getAll();
        all =  all.filter((item) => item.id !== id);
        return new Promise((resolve, reject)=>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'companies.json'),
                JSON.stringify(all),
                (err) => {
                    if (err){
                        reject(err)
                    } else{
                        resolve(all)
                    }
                }
            )
        })
    }
    static async changeCompaniesById (company) {
        const companies = await Companies.getAll();
        const idx = companies.findIndex((item) => item.id === company.id);
        companies[idx] = company;
        return new Promise((resolve, reject)=>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'companies.json'),
                JSON.stringify(companies),
                (err) => {
                    if (err){
                        reject(err)
                    } else{
                        resolve()
                    }
                }
            )
        })
    }
    static getAll () {
        return new Promise((resolve, reject)=>{
            fs.readFile(
                path.join(__dirname, '..', 'data', 'companies.json'),
                'utf-8',
                (err, data) => {
                    if (err){
                        reject(err)
                    } else {
                        resolve(JSON.parse(data))
                    }
                }
            )
        })
    }
}

module.exports = Companies;