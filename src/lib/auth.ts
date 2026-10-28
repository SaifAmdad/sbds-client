import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

// const mongodbUrl: string = process.env.MONGODB_URL as string;
const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  //...other options

  emailAndPassword: {
    enabled: true,
  },

  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
      phone: {
        type: "string",
        defaultValue: null,
      },
      status: {
        type: "string",
        defaultValue: "active",
      },
    },
  },
});
