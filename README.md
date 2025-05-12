Emoji Hub

Emoji Hub is a web application that allows users to explore, search, and sort a rich collection of emojis. Users can easily copy emojis and filter them by categories or alphabetical order. In future versions, features like Favorites and Infinite Scrolling will be added to enhance the user experience.

🌐 Live Demo

Coming soon!

🚀 Features

🌟 Search Emojis: Instantly find emojis by name.

🔄 Sort Emojis: Sort emojis alphabetically (A-Z, Z-A) or by category.

🔎 Filter by Category: Easily filter emojis based on categories dynamically loaded from the API.

⚡ Loading State: Animated loading indicator for smooth experience.

💾 Upcoming Feature: Favorites section for saving frequently used emojis.

♾️ Upcoming Feature: Infinite scrolling for a seamless browsing experience.

🚀 Smooth Navigation: Intuitive design with simple navigation between Home and Emoji List.



🛠 Installation and Setup

Clone the repository:

git clone https://github.com/aainur/emoji-hub.git

Navigate to the project directory:

cd emoji-hub

Install dependencies:

npm install
cd src/services
npm install
npm install express cors axios dotenv

After installing dependencies to run and test the project locally: 

First, to run the server, open the terminal: 

node src/services/server.js
The server is going to be running on port 5000
Open your browser and navigate to http://localhost:5000 to check server is running 

Open another terminal to run the application:

npm start

Access the application: Open your browser and navigate to http://localhost:3000

🧠 Design and Development Process

The project is structured with simplicity and scalability in mind:

Home: A welcoming introduction page with animated emojis and a button to explore the Emoji List.

Emoji List: Displays all available emojis with search, sort, and filter options.

Loading Indicator: Enhances UX by showing a loader while fetching data.

I decided to keep the navigation bar to allow future extensions like Favorites, Infinite Scrolling, and Detailed Emoji View.

💡 Unique Approaches and Methodologies

Used TailwindCSS for rapid styling and responsive design.

Integrated Framer Motion for smooth animations on the Home page.

Implemented dynamic category filtering by fetching groups directly from the API.

⚖️ Compromises and Decisions

Infinite Scroll vs. Loading: Chosed to implement a loader instead of infinite scrolling to meet time constraints. Infinite scrolling is planned for the next update.

Favorites Functionality: Feature is still under development.

🐞 Known Issues and Limitations

Some emojis may not render correctly in older browsers.

The loading takes time to fetch all the emojis from API 

⚙️ Technology Stack

Frontend: React, TailwindCSS, Framer Motion

Backend: Node.js, Express

Data Fetching: Axios

The stack was chosen for its flexibility, speed, and developer-friendly structure. React and TailwindCSS allowed for rapid UI development, while Axios made API integration smooth.

🎥 Demo Video

Coming soon!

Feel free to reach out if you have questions or want to contribute!

👨‍💻 Author

Ainur Aman

💡 Fun Fact:

All the emojis used in the application, including the ones you see in this README, were proudly copied straight from Emoji Hub app! 😊

