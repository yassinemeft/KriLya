# 🏡 KryLia

**KryLia** is a full-stack mobile application designed to facilitate the exploration and rental of houses. The project is structured into two primary sections:

- `mobile/`: Frontend developed with React Native (Expo)
- `backend-laravel/`: Backend API implemented with Laravel

---

## 📱 Mobile App (React Native + Expo)

The mobile app offers a seamless and user-friendly interface for users to search listings, view house details, and connect with landlords.

### Features

- Interactive map showcasing available rentals
- Detailed house views with images and pricing
- Filtering options by location, price, and type
- Contact form for landlord communication
- Clean and responsive UI utilizing Expo and React Navigation

To execute the mobile app:

```bash
cd mobile
npm install
npx expo start
```

## 🖥️ Backend (Laravel API)

The backend manages user authentication, listings, and data operations.

### Features

- RESTful API for houses and users
- MySQL database integration
- JWT authentication (optional)
- Laravel MVC framework

To execute the backend:

```bash
cd backend-laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Ensure your .env file is configured for database and API settings.

## 🌍 Project Structure

```plaintext
KriLya/
├── mobile/                 # React Native frontend (Expo)
│   ├── assets/
│   ├── components/
│   ├── app/
│   ├── package.json
│   └── ...
│
├── backend-laravel/        # Laravel backend
│   ├── app/
│   ├── database/
│   ├── routes/
│   ├── resources/
│   ├── public/
│   ├── .env.example
│   ├── artisan
│   └── ...
│
├── .gitignore
└── README.md
```

## 📦 Tech Stack

- Frontend: React Native, Expo, React Navigation
- Backend: Laravel, MySQL
- Cloud: Cloudinary (for images), Aiven (for MySQL), Railway (optional)

## 🛠️ Environment Variables

Each application has its own .env file (not committed).

### Example for mobile/.env

```plaintext
API_URL=http://localhost:8000/api
```

### Example for backend-laravel/.env

```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=krilya
DB_USERNAME=root
DB_PASSWORD=
```

## 👥 Authors

Yassine Meftah – [GitHub](https://github.com/yassinemeft)

