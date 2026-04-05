## 🔐 Authentication Flow

```mermaid
flowchart LR
  A[User Signup] --> B[Verification Email Sent]
  B --> C[User Clicks Verification Link]
  C --> D[Account Verified]
  D --> E[User Login]
  E --> F[Access + Refresh Tokens Issued]
  F --> G[Refresh Token Rotation / Logout]
