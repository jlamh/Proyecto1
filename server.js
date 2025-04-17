const express = require('express');
const app = express();
app.use(express.json());
let items = ["Elemento 1", "Elemento 2"];

app.get('/home', (req, res) => {
    res.json({ items });
});

app.post('/home', (req, res) => {
    const { item } = req.body; 
    if (!item) {
        return res.status(400).json({ error: 'Item is required' });
    }
    items.push(item);
    res.status(201).json({ message: 'Item added', items });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
