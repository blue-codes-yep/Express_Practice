const db = require('./conn');

class ExecutiveList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM ceos;`);
            return response;
        } catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }
    static async getById(id) {
        try {
        const response = await db.any( `SELECT * FROM ceos WHERE id = ${id}`);
        return response;
        }
        catch (error){
            console.error('ERROR', error);
            return error;
        }
    }
}

module.exports = ExecutiveList;