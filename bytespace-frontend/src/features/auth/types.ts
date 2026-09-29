export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export interface AuthValidationErrors {
  name?: string;
  email?: string;
  password?: string;
  agreeToTerms?: string;
  general?: string;
}
