// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import "dotenv/config";

export default function handler(req, res) {
  const { IMAGES_PATH } = process.env;
  const img = fs.readFileSync(path.join(IMAGES_PATH, "stat.svg"));
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(img);
}
