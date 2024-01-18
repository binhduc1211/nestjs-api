import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateTodoSchema = z.object({
  content: z.string(),
});

const GetTodoSchema = z.object({
  textSearch: z.string().optional(),
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export class CreateTodoDto extends createZodDto(CreateTodoSchema) {}

export class GetTodoDto extends createZodDto(GetTodoSchema) {}
