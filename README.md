# 🌍 AidLink – AI-Powered Humanitarian Relief Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![Status](https://img.shields.io/badge/Project-Completed-success)

### Connecting Donors, Volunteers, Relief Organizations, and Disaster Victims through AI

</div>

---

# 📌 Project Overview

AidLink is a modern humanitarian disaster relief web application developed using **Next.js**, **Firebase**, **Tailwind CSS**, and **TypeScript**.

The platform connects:

- ❤️ Donors
- 🙋 Volunteers
- 🏢 Relief Organizations
- 🚨 Disaster Victims

into one centralized ecosystem.

Instead of manually assigning volunteers and organizations, AidLink automatically assigns available volunteers and suitable organizations based on disaster type and availability.

---

# 🎯 Problem Statement

During disasters, affected people often struggle to:

- Find verified relief organizations
- Request help quickly
- Locate nearby volunteers
- Receive timely assistance
- Track request status

Similarly, organizations face challenges in:

- Managing requests
- Assigning volunteers
- Tracking donations
- Coordinating relief operations

AidLink solves these challenges by providing one integrated AI-powered humanitarian platform.

---

# ✨ Key Features

## 🏠 Home Page

- Modern landing page
- Hero section
- Categories
- Statistics
- Featured Donations
- AI Information
- Footer

---

## 👤 Authentication

- User Registration
- User Login
- Firebase Authentication
- Logout

---

## ❤️ Donate

Users can

- Donate money
- Donate food
- Donate clothes
- Donate medicine

Donation history is stored securely in Firebase.

---

## 🚨 Request Emergency Help

Victims can submit:

- Name
- Contact
- Address
- Disaster Type
- Urgency
- Number of People
- Needed Items
- Description

AidLink automatically:

- Finds an available volunteer
- Finds a matching organization
- Assigns both automatically
- Saves request in Firestore

---

## 🙋 Volunteer Registration

Volunteers can register with:

- Skills
- City
- Availability
- Contact Information

Volunteer data is stored in Firestore.

---

## 🏢 Organizations

Relief organizations can be viewed with:

- Category
- City
- Contact Information

---

## 📊 Dashboard

Dashboard provides:

- Total Donations
- Total Volunteers
- Total Requests
- Recent Requests
- Recent Volunteers
- Recent Donations

---

## 👤 User Profile

Displays:

- User Information
- Email
- Authentication Details

---

## 📄 Privacy Policy

Dedicated Privacy Policy page.

---

## 📜 Terms of Service

Dedicated Terms page.

---

# 🤖 AI Features

AidLink includes intelligent automation.

Current AI Features:

✅ Automatic Volunteer Assignment

✅ Automatic Organization Assignment

Based on:

- Disaster Category
- Volunteer Availability
- City Matching

---

# 🛠 Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Frontend Framework |
| React | UI |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Firebase Authentication | Login System |
| Cloud Firestore | Database |
| Firebase Hosting Ready | Deployment |
| Lucide Icons | Icons |

---

# 📂 Project Structure

```
app/
components/
lib/
public/

Firebase
 ├── users
 ├── volunteers
 ├── organizations
 ├── donations
 └── helpRequests
```

---

# 🔥 Firestore Collections

## users

Stores

- Name
- Email
- Role

---

## volunteers

Stores

- Name
- Email
- City
- Status
- Skills

---

## organizations

Stores

- Organization Name
- Category
- Contact

---

## donations

Stores

- Donor Details
- Donation Type
- Amount

---

## helpRequests

Stores

- Victim Information
- Disaster Type
- Assigned Volunteer
- Assigned Organization
- Status

---

# 🔒 Security

AidLink uses Firebase Security Rules.

Features include:

- Authenticated user access
- Protected database
- Firestore security
- Firebase Authentication

Sensitive credentials are stored using:

```
.env.local
```

and are **never committed** to GitHub.

---

# 🚀 Installation

Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/aidlink.git
```

Install packages

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create

```
.env.local
```

Example

```env
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN

NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER

NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

---

# 📷 Screenshots

Add screenshots here after deployment.

Example:

```
Home Page

Dashboard

Donate

Volunteer

Organizations

Help Request

Profile
```

---

# 🌐 Deployment

Project can be deployed using

- Vercel
- Firebase Hosting

Deployment Link

```
https://your-project.vercel.app
```

GitHub Repository

```
https://github.com/YOUR_USERNAME/aidlink
```

---

# 📈 Future Improvements

AidLink is designed to grow into a real humanitarian platform.

Future enhancements include:

## 🌍 Real NGO Integration

The system can be integrated with organizations such as:

- Edhi Foundation
- Pakistan Red Crescent Society
- Alkhidmat Foundation
- Saylani Welfare
- Akhuwat Foundation
- Rescue 1122
- NDMA
- PDMA

This would allow verified organizations to receive and manage real disaster requests directly through the platform.

---

## 💳 Real Payment Gateway

Future versions can support secure online donations through trusted payment providers such as:

- Stripe
- PayPal
- JazzCash
- EasyPaisa
- Bank Transfers

This would enable verified financial donations directly to registered humanitarian organizations.

---

## 📍 Live Location Tracking

- Google Maps Integration
- Live Disaster Mapping
- Volunteer GPS Tracking
- Nearby Shelter Discovery

---

## 📱 Mobile Application

Develop Android and iOS applications using React Native or Flutter for wider accessibility.

---

## 🤖 Advanced AI

Future AI capabilities may include:

- AI-based request prioritization
- Disaster severity prediction
- Volunteer recommendation engine
- Resource demand forecasting
- AI chatbot for emergency assistance
- Image-based disaster damage assessment

---

## 📢 Notifications

Support real-time notifications through:

- Email
- SMS
- WhatsApp
- Push Notifications
- Firebase Cloud Messaging (FCM)

---

## 📊 Analytics Dashboard

Provide organizations with advanced insights:

- Donation trends
- Volunteer activity
- Disaster response statistics
- Geographic heat maps
- Performance reports

---

## 🔄 Real-Time Collaboration

Enable:

- Live request tracking
- Multi-organization coordination
- Volunteer status updates
- Instant data synchronization

---

# 🎓 Academic Purpose

This project was developed as part of a BS Information Technology academic project to demonstrate practical skills in:

- Full Stack Web Development
- Firebase Integration
- AI-Assisted Automation
- Database Design
- Responsive UI Development
- Modern Software Engineering Practices

---

# 👩‍💻 Developed By

**Afia Naseem**

BS Information Technology

International Islamic University Islamabad

GitHub:

https://github.com/YOUR_USERNAME

LinkedIn:

https://linkedin.com/in/YOUR_PROFILE

---

# 📜 License

This project is developed for educational purposes.

Future commercial use may require additional licensing and integration with official humanitarian organizations.

---

<div align="center">

### ❤️ AidLink

Connecting Humanity Through Technology

</div>