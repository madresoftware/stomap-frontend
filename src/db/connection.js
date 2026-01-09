import { createClient } from "@libsql/client";

console.log(process.env)
export const turso = createClient({
  url: 'libsql://stomap-alexclapou.aws-us-east-2.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3Njc5Nzg4NDMsImlkIjoiOTNiOTZlZmItNzQ3Zi00ZWY0LWExYzEtNDJjNjYzOTAyOWQ1IiwicmlkIjoiOTMyNTBiMjQtY2NkMS00MzMzLWE0NTgtNjVjNTk5NmVmZGY1In0.9sHAvA3blIxvYQrGoYS8xZLaohhRWX3WOce7IEi8cgidM-CrElBKZMxU05ECIWah0NoTVtbE6x_9xDDS9dheCw',
});