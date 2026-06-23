# Deploy

This project is prepared for GitHub Pages.

Target public URL:

```text
https://luoshiyanxi-cmyk.github.io/
```

After GitHub CLI login, create the repository and push:

```powershell
gh auth login
gh repo create luoshiyanxi-cmyk.github.io --public --source . --remote origin --push
```

Then open the repository on GitHub, go to **Settings -> Pages**, and set **Source** to **GitHub Actions** if it is not already selected.

The workflow in `.github/workflows/deploy.yml` builds `client` and publishes `client/dist`.
