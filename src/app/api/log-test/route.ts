"use server";

import { logger } from "@/lib/pino";

export async function GET() {
  logger.error("Test zápisu z Next.js");
  return Response.json({ ok: true });
}

// export async function GET() {
//   const file = resolve(process.env.LOG_FILE ?? "./logs/app.log");

//   try {
//     mkdirSync(dirname(file), { recursive: true });

//     const destination = pino.destination({
//       dest: file,
//       sync: true,
//     });

//     try {
//       const logger = pino({ level: "info" }, destination);

//       logger.info("Test zápisu z Next.js");
//       destination.flushSync();

//       return Response.json({
//         ok: true,
//         cwd: process.cwd(),
//         file,
//         lastLine: readFileSync(file, "utf8").trim().split("\n").pop(),
//       });
//     } finally {
//       destination.end();
//     }
//   } catch (err) {
//     console.error("Zápis logu selhal:", err);

//     return Response.json(
//       { ok: false, file, error: String(err) },
//       { status: 500 },
//     );
//   }
// }
