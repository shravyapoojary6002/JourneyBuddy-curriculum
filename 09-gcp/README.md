# Module 2.9 — Google Cloud Platform (GCP)

## What this is
A design for how to store files in the cloud, with some files open to everyone and others kept private.

## Folder layout
gs://journeybuddy-demo-bucket/
├── public/
│ ├── logo.png
│ ├── banner.jpg
│ └── terms-of-service.pdf
└── private/
├── user-uploads/
│ └── profile-photo.jpg
└── internal-reports/
└── monthly-summary.pdf

**Why split into two folders:** it's easier to give permissions to a whole folder at once, instead of setting rules on every single file.

## Who can access what
- **public/** folder — anyone on the internet can view these files, no login needed. Good for things like logos and public documents.
- **private/** folder — nobody can access these directly. Only the backend server is allowed to read/write them.
- Only the project owner have full control over everything.

## How access actually works
- Files in `public/` get a link that works for anyone
- Files in `private/` are blocked by default — the only way in is through the backend server checking who you are first (same idea as the Firebase Auth module)

## Reference documentation
https://cloud.google.com/docs