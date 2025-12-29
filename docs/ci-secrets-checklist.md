# CI Secrets Checklist

Configure these secrets in your CI platform settings.

## Required Secrets

| Secret Name | Description | Where to Get |
|-------------|-------------|--------------|
| *(None required for basic setup)* | | |

## Optional Secrets

| Secret Name | Description | Where to Get |
|-------------|-------------|--------------|
| `SLACK_WEBHOOK` | Slack notifications on failure | Slack App > Incoming Webhooks |
| `TEST_API_KEY` | API key for test environment | Your API management console |

---

## How to Configure (GitHub Actions)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the appropriate value

---

## Security Best Practices

✅ **DO:**

- Use environment-specific secrets (staging/production)
- Rotate secrets every 90 days
- Use minimum required permissions
- Reference secrets via `${{ secrets.SECRET_NAME }}`

❌ **DON'T:**

- Commit secrets to version control
- Log secrets in CI output
- Share secrets across environments
- Use personal credentials as CI secrets

---

## Environment Variables

These are set directly in the workflow (not secrets):

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `http://localhost:3000` | Frontend URL |
| `API_URL` | `http://localhost:8000/api` | Backend API URL |

**Override in workflow:**

```yaml
env:
  BASE_URL: https://staging.example.com
```

---

## Validation

After configuring secrets, verify by:

1. Trigger a manual workflow run
2. Check that steps using secrets don't fail with "secret not found"
3. Verify notifications arrive (if Slack configured)
