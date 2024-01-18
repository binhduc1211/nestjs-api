import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CredentialsSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// class is required for using DTO as a type
export class CredentialsDto extends createZodDto(CredentialsSchema) {}
