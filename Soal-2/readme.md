Cara running program
1. Buat Database sesuai schema.sql
2. copy file ".env.example" dan rename menjadi ".env"
3. install dependencies (npm install)
4. jalankan project (npm run dev)
5. lakukan percobaan ke API (bisa dengan Postman dsb) 

POST: Menambahkan pengguna baru ke database -> http://localhost:3000/users/create
GET: Mengambil daftar seluruh pengguna -> http://localhost:3000/users
GET: Mengambil data pengguna berdasarkan ID -> http://localhost:3000/users/:id
DELETE: Menghapus pengguna berdasarkan ID -> http://localhost:3000/users/:id
