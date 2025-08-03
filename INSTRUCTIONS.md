# Setup & Testing Instructions for Gemini Voice Assistant

## ✅ Requirements

- Node.js v18+
- A modern browser (Chrome recommended)
- Microphone access

---

## 🔑 Gemini API Key

1. Visit: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Copy your API key.
3. Add it to your `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

---

## 🚀 Running the App

```bash
npm install
npm start
```

Navigate to: [http://localhost:3000](http://localhost:3000)

---

## 🗣️ Using the App

1. Click the **mic button** to start speaking.
2. The assistant will respond aloud using voice.
3. To **interrupt**, simply say: **“stop now ”** (not just any sound).
4. The assistant will cancel the response and start listening again.
---

## 🎥 What to Show in Demo Video

1. Start the assistant and ask about Revolt Motors.
2. Mid-sentence, say “stop” — it should stop speaking.
3. Speak your new query and get the next response.
4. Show that latency is low (1–2 seconds ideally).

---
