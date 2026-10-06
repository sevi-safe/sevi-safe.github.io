# SEVI project page

This folder is a ready-to-publish static project page for:

**SEVI: Safe Evidential Real-World Reinforcement Learning**  
Shaekh Mohammad Shithil, Lantao Liu  
Indiana University Bloomington  
IEEE Robotics and Automation Letters (RA-L), 2026

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `sevi`.
2. Upload the entire contents of this folder to the repository root.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will show the public project-page URL after deployment.

No build step is required.

## Things to update later

- Replace the `Code · coming soon` span in `index.html` with a link to the public code repository.
- Update the paper PDF if you receive an IEEE-formatted final version.
- Add volume / issue / pages / DOI to the BibTeX once available.
- If desired, add author homepage links around the two author names.

## Local preview

Open `index.html` in a browser. For the most reliable local video playback, run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
