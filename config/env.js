export const envConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  nodeEnv: process.env.NODE_ENV || 'development',
  emailServiceKey: process.env.EMAIL_SERVICE_KEY || '',
  emailFrom: process.env.EMAIL_FROM || 'noreply@quantfund-ai.com',
};

export const isProduction = envConfig.nodeEnv === 'production';
export const isDevelopment = envConfig.nodeEnv === 'development';
