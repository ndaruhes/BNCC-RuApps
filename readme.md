<h1 align="center">RuApps - BNCC Elite Team Quest</h1>
<h3 align="center">Build with ExpressJS & Vue 3</h3>

<br>

## Live Demo
<h4>https://ruapps.netlify.app</h4>

<br>

## Features
<b>1. FRONTEND</b>
<ul>
	<li>Navbar ✔️</li>
	<li>Hero section ✔️</li>
	<li>Fitur carousel ✔️</li>
	<li>Form kontak ✔️</li>
	<li>Validasi input (opsional) ✔️</li>
	<li>Footer section ✔️</li>
	<li>Animasi (opsional) ✔️</li>
	<li>Responsive ✔️</li>
	<li>Fetch API (opsional) ✔️</li>
</ul>

<br>

<b>2. BACKEND</b>
<ul>
	<li>Fitur CRUD (Create, Read, Update, Delete)  ✔️</li>
	<li>Otentikasi (Signup dan Login) ✔️</li>
	<li>Seed data atau initial data ✔️</li>
</ul>

<br>

## Setup Project
<b>1. Clone Repository</b>

```
git clone https://github.com/ndaruhes/BNCC-RuApps.git
cd BNCC-RuApps
```
<br>

<b>2. Setup API</b>
<p>Ubah credentials database jika perlu didalam folder api file .env</p>
<ul>
    <li>DB_DATABASE</li>
    <li>DB_USERNAME</li>
    <li>DB_HOST</li>
    <li>DB_PASSWORD</li>
</ul>

```
cd api                  // pindah ke folder api
npm install             // menginstall package node_modules
npm run migrate:fresh   // menjalankan migrasi database
npm run seed:fresh      // seed data / initial data
npm run dev             // menjalankan server (Link: http://localhost:3000/)
```

<br>

<b>3. Setup Client</b>

```
cd client               // pindah ke folder client
npm install             // menginstall package node_modules
npm run dev             // menjalankan server (Link: http://localhost:8080/)
```