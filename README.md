# lipigenomics — static site

This branch adds a mobile-first static site with a hero (DNA motif + title), project cards and a JSON-driven members page.

Files added:
- index.html — main page with hero, projects and members section.
- members.html — standalone members page that reads members.json.
- members.json — editable list of members (one example entry included).
- styles.css — theme and layout.

How to preview locally
1. Clone the repo and checkout the `feature/hero-and-members` branch:

   git clone https://github.com/ronakofficial23/lipigenomics.git
   git checkout feature/hero-and-members

2. Open `index.html` in a browser (static files only).

Enable GitHub Pages (optional)
- In the repository's Settings → Pages, set the source to the `feature/hero-and-members` branch (or merge to default branch and use that).
- The site will be published at `https://<your-username>.github.io/lipigenomics/` once Pages builds.

Editing members
- Edit `members.json` in the repository (via web editor or locally) to add/remove members. Each entry should look like the example in `members.json`.

Next steps I recommend
- Review the branch and open a PR to merge into your default branch.
- Replace placeholder avatars with real images in `assets/` and update `members.json`.
- (Optional) Deploy from the default branch and enable GitHub Pages for the final live URL.



(Trivial edit to force Pages rebuild)
