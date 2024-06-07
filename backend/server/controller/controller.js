let Userdb = require('../model/model');

// Tworzenie i zapis nowego uzytkownika
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Zawartość nie może być pusta' });
        return;
    }

    // nowy użytkownik
    const user = new Userdb({
        name: req.body.name,
        surname: req.body.surname,
        nickname: req.body.nickname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password,
    });

    // zapisz użytkownika w bazie danych
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Wystąpił błąd podczas tworzenia operacji tworzenia"
            });
        });
};

// pobierz i zwróć wszystkich użytkowników / pobierz i zwróć pojedynczego użytkownika
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Nie znaleziono użytkownika z id " + id });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Błąd podczas pobierania użytkownika z id " + id });
            });
    } else {
        Userdb.find()
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Wystąpił błąd podczas pobierania informacji o użytkownikach" });
            });
    }
};

// zaktualizuj użytkownika po id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Dane do aktualizacji nie mogą być puste" });
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Nie można zaktualizować użytkownika z id " + id + ", być może użytkownik nie został znaleziony" });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Błąd podczas aktualizacji informacji o użytkowniku" });
        });
};

// usuń użytkownika po id
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Nie można usunąć użytkownika z id " + id + ", być może id jest błędne" });
            } else {
                res.send({
                    message: "Użytkownik został pomyślnie usunięty"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Nie można usunąć użytkownika z id = " + id
            });
        });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "Email i hasło są wymagane" });
    }

    Userdb.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "Nie znaleziono użytkownika" });
            }

            if (user.password !== password) {
                return res.status(400).send({ message: "Nieprawidłowe hasło" });
            }
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Błąd podczas logowania" });
        });
};

exports.logout = (req, res) => {
    res.status(200).send({ message: "Wylogowano pomyślnie" });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;

    Userdb.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "Nie znaleziono użytkownika z id " + id });
            }
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({ message: "Błąd podczas pobierania użytkownika z id " + id });
        });
};
