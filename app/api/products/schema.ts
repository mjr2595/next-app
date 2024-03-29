import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  price: z.number().min(0).max(1000),
});

export default schema;
