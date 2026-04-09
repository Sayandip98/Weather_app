<div align="center">

# 🌤️ React Weather App

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=24&pause=1000&color=3B82F6&center=true&vCenter=true&width=600&lines=Real-Time+Weather+Updates;Check+Temperature,+Humidity,+Wind;Built+with+React+%26+Vite" alt="Typing SVG" />

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/OpenWeather_-E96E50?style=for-the-badge&logo=openweathermap&logoColor=white" alt="OpenWeather API" />
</p>

A clean, modern, and highly responsive weather application built with **React** and **Vite**. Instantly fetch real-time weather data for any city worldwide using the **OpenWeatherMap API**. 

</div>

## 🔗 Live Demo
 
> **[👉 Try it live here →](https://your-live-demo-url.vercel.app)**
 
<!-- Replace the URL above with your actual deployment link (Vercel / Netlify / GitHub Pages) -->
 
> **💡 Deployment tip:** Deploy for free on [Vercel](https://vercel.com) by importing your GitHub repo. Your `VITE_WEATHER_API_KEY` can be added as an environment variable in the Vercel dashboard — no code changes needed.
 
---
 
## 📸 Preview
 
<!-- Add a screenshot or GIF of your app here -->
> _Add a screenshot or screen recording here to give visitors an instant visual impression._
 
```
📷 Tip: Use tools like Screenpresso, LiceCap, or your browser's DevTools device mode
to capture a clean screenshot or GIF of the app in action.
```
 
---

## ✨ Features

- **🌍 Search by City**: Get instant weather updates for any city around the globe.
- **🌡️ Comprehensive Weather Data**: View temperature, feels-like temperature, humidity, wind speed, and pressure.
- **🎨 Dynamic Weather Icons**: Displays corresponding weather icons retrieved natively from OpenWeatherMap.
- **⚡ Lightning Fast**: Built with Vite and React for ultra-fast performance.
- **📱 Responsive Design**: Seamless experience across mobile, tablet, and desktop devices.
- **🛡️ Error Handling**: Graceful error UI when a city is not found or API issues occur.
- **⌨️ Keyboard Support**: Press "Enter" to search instantly after typing.

## 🛠️ Technologies Used

| Technology | Description |
|---|---|
| **[React](https://react.dev/)** | Component-based UI library |
| **[Vite](https://vitejs.dev/)** | Next Generation Frontend Tooling |
| **[OpenWeather API](https://openweathermap.org/)** | Reliable real-time weather data |
| **Vanilla CSS** | Custom responsive styling |

## 🚀 Installation & Setup

Want to run this project locally? Follow these simple steps:

### 1. Clone the repository
```bash
https://github.com/Sayandip98/Weather_app.git
cd weather-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```
*(You can get a free API key by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up))*

### 4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```
📦 src
 ┣ 📂 assets            # Static assets
 ┣ 📂 components        # Reusable React components
 ┃ ┗ 📜 WeatherCard.jsx # Card component displaying weather data
 ┣ 📜 App.jsx           # Main application component & state management
 ┣ 📜 App.css           # Application-level styling
 ┣ 📜 index.css         # Global styling configurations
 ┗ 📜 main.jsx          # React application entry point
```

## 💡 Usage

1. Open the application in your browser.
2. Enter the name of a city (e.g., "London", "Tokyo", "New York") in the search bar.
3. Press **Enter** or click the **Search** button.
4. View the beautifully presented real-time weather details!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check out the issues page if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

 
---
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
 
---
 
<div align="center">
 
Made with ❤️ by [Sayandip](https://github.com/Sayandip98)
 
⭐ **If you found this project useful, consider giving it a star!** ⭐
 
</div>
