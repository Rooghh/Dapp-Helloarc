import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req: Request, res: Response) => {
  console.log("Received webhook:");
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).json({ received: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Webhook receiver listening on port ${PORT}`);
  console.log(`Endpoint: http://localhost:${PORT}/webhook`);
});

