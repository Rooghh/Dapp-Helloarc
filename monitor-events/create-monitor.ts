import "dotenv/config";

async function main() {
  const response = await fetch("https://api.circle.com/v1/notifications/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
    },
    body: JSON.stringify({
      endpoint: process.env.WEBHOOK_URL,
      subscriptionDetails: {
        chain: process.env.CHAIN_ID,
        contractAddress: process.env.CONTRACT_ADDRESS,
        eventSignature: process.env.EVENT_SIGNATURE,
      },
    }),
  });

  const data = await response.json();
  console.log("Resposta da Circle:");
  console.log(data);
}

main().catch(console.error);
