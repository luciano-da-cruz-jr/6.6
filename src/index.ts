import express, { Request, Response, NextFunction }  from "express";
import usersRoute from "./routes/users.route";

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Configuraçoes de Rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso total, vocês são demais poxa!'});
})

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})