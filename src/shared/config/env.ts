import { z } from 'zod';

const APP_ENVS = ['development', 'staging', 'production'] as const;

const DEFAULT_API_BASE_URL = 'https://dummyjson.com';

const envSchema = z.object({
  VITE_API_BASE_URL: z.url().default(DEFAULT_API_BASE_URL),
  VITE_APP_ENV: z.enum(APP_ENVS).default('development')
});

export type AppEnv = (typeof APP_ENVS)[number];

type Env = z.infer<typeof envSchema>;

const formatIssues = (error: z.ZodError): string => {
  return error.issues
    .map((issue) => {
      const path = issue.path.join('.');

      return path ? `${path}: ${issue.message}` : issue.message;
    })
    .join('; ');
};

const parseEnv = (): Env => {
  const result = envSchema.safeParse(import.meta.env);

  if (!result.success) {
    throw new Error(
      `Invalid environment variables. ${formatIssues(result.error)}. See .env.example`
    );
  }

  return result.data;
};

export const env = parseEnv();
