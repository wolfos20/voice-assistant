#  Voice Assistant for Revolt Motors

This project replicates the Revolt Motors voice chatbot using the Gemini Live API. It features a conversational interface with real-time voice interaction, voice interruption support, and low response latency.

## 🔧 Tech Stack

- **Frontend:** HTML, TailwindCSS, Web Speech API
- **Backend:** Node.js
- **AI API:** Gemini Live API (Google Generative AI)

---

## 🌟 Features

- 🎤 **Voice input with live transcription**
- 🔊 **AI-generated voice output**
- ⏱️ **Low-latency responses**
- 🛑 **Real-time interruption handling (say “stop” to interrupt)**
- 🚘 **Domain-specific knowledge (Revolt Motors only)**

---

## 📦 Folder Structure

```
project-root/
├── server.js              # Express backend
├── .env                   # Gemini API key
├── public/
│   ├── index.html         # Frontend with UI + JS logic
│   └── [other assets]
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/revolt-gemini-voice-bot.git
cd revolt-gemini-voice-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory:

```
GEMINI_API_KEY=your_api_key_here
```

> 🔐 Get your Gemini API key from: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

---

### 4. Run the Application

```bash
npm start
```

Visit the app at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Development Notes

- To avoid Gemini API rate limits during testing, use:  
  `gemini-2.0-flash-live-001` or `gemini-live-2.5-flash-preview`
- Final deployment must use:  
  `gemini-2.5-flash-preview-native-audio-dialog`

---

## 🧠 System Prompt (Backend)

The assistant is restricted to answering only about Revolt Motors:

```text
You are a voice assistant that answers only questions related to Revolt Motors.
Politely decline to respond to anything unrelated. Speak in a clear, friendly tone
without using markdown formatting, since your responses are spoken aloud.
```

---

## 📹 Submission Requirements

- ✅ **Demo Video**: [Google Drive Link (Public)](https://drive.google.com/your-demo-link)
- ✅ **GitHub Repo**: [GitHub Link]([(https://github.com/wolfos20/voice-assistant.git])

---

## 🔗 Helpful Resources

- 🔊 [Live Benchmark App](https://live.revoltmotors.com)
- 🧠 [Gemini Live API Docs](https://ai.google.dev/gemini-api/docs/live)
- 🧪 [Gemini Live Playground](https://aistudio.google.com/live)
