import dotenv from "dotenv";
dotenv.config();

export const URLS = {
  URL: process.env.URLSAUCEDEMO,
};

export const CREDENCIALES = {
  USER: process.env.USERSAUCEDEMO,
  PASS: process.env.PASSWORDSAUCEDEMO,
};
