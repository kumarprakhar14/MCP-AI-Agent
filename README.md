# 🚀 Twitter-AI-AGENT: MCP-Enabled Twitter Bot

## 📡 About MCP Server

**Model Context Protocol (MCP)** enables AI models to interact with external tools and services through a standardized interface. It allows seamless integration between AI and functionalities—making it easier to build AI-powered applications.

---

## 🤖 About the Project

This project demonstrates the integration of **Google's Gemini AI model** with **Twitter (X)** using the **MCP protocol**.  
It provides a command-line interface where users interact with AI, which can post tweets via Twitter API credentials.

---

## ⚙️ How It Works

1. The **MCP server** exposes tools (e.g., `createPost`, `addTwoNumbers`) via a REST API.
2. The **client** connects to the MCP server using **Server-Sent Events (SSE)**.
3. **User inputs** are processed by **Gemini AI**.
4. The **AI chooses** to call available tools based on context.
5. **Results** are displayed back to the user in real time.

---

## 🛠️ Using the Project

### 📥 Clone the Repository

```bash
git clone https://github.com/kumarprakhar14/MCP-AI-Agent.git
cd MCP-AI-Agent
```

---

### 🖥️ Server Setup

```bash
cd server
npm install
# Create .env file with Twitter API credentials
npx nodemon ./index.js
```

---

### 💻 Client Setup

```bash
cd client
npm install
# Add GEMINI_API_KEY to .env file
npx nodemon ./index.js
```

---

## 📦 Dependencies

- `Node.js`
- `Express`
- `twitter-api-v2`
- `@modelcontextprotocol/sdk`
- `@google/genai`
- `zod`
- `dotenv`

---

## 🔐 Getting API Keys

### 🧠 Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"**
4. Copy it and add to your `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

---

### 🐦 Twitter (X) API Keys

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new **project and app**
3. Enable **Read and Write** permissions
4. Generate the following and add them to your `.env` file:

```env
TWITTER_API_KEY
TWITTER_API_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET
```

---

## 🧪 Environment Variables

Your `.env` file should look like this:

```env
GEMINI_API_KEY=your_gemini_api_key
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
```

---

## ⚠️ Disclaimer

> Twitter (X) enforces strict policies regarding automated posting.  
> Excessive or irresponsible automation may lead to **account suspension or permanent ban**.  
> This tool is intended **for educational purposes only**.  
> Always comply with Twitter’s automation rules and best practices.

--- 