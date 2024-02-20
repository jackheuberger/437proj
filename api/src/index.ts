import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

import { request } from "./routes/request";

const app = new Elysia()
  .use(request)
  .use(swagger())
  .listen(3000)
  