import db from "../db.js";

export const createUser = (req, res) => {

    const {name, email} = req.body;
    
    if(!name || !email){
        return res.status(400).json({message: "Nama dan Email harus di isi"});
    };

    const query = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(query, [name, email], (err, result) => {
        if (err){
            if (err.code === "ER_DUP_ENTRY"){
                return res.status(400).json({message: "Email Sudah Terdaftar"});
            }
        return res.status(500).json({message: err.message})
        }
        res.status(201).json({id: result.insertId, name, email})
    }) 
};

export const getUsers = (req, res) => {

    db.query("SELECT * FROM users", (err, result) => {
        if(err) return res.status(500).json({message: err.message});
        res.json(result);
    })

}

export const getUserById = (req, res) => {

    const {id} = req.params;

    db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if(err) return res.status(500).json({message: err.message})
        if(result.length === 0) return res.status(404).json({message: "data users kosong, Id tidak ditemukan"});
        res.json(result[0]);
    })

}

export const deleteUser = (req, res) => {

    const {id} = req.params;

    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if(err) return res.status(500).json({message: err.message});
        if(result.affectedRows ===  0) return res.status(404).json({message: "Id tidak ditemukan"});
        res.json({message: `Data dengan id ${id} berhasil dihapus`});
    })

}
