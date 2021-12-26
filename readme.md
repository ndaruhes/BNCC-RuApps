<h1 align="center">RuApps - BNCC Elite Team Quest</h1>
<h3 align="center">Build with ExpressJS & Vue 3</h3>

## Setup Project
<b>1. Clone Repository</b>
```
git clone https://github.com/ndaruhes/BNCC-RuApps.git
cd BNCC-RuApps
```
<br>

<b>2. Setup API</b>
<p>Ubah credentials database jika perlu didalam folder api file .env (DB_DATABASE, DB_USERNAME, DB_HOST, DB_PASSWORD)</p>
```
cd api
npm install
npm run migrate:fresh
npm run seed:fresh
npm run dev
```

<br>

<b>3. Setup Client</b>
```
cd client
npm install
npm run dev
```

## Live Demo
<h4>https://ruapps.netlify.app</h4>