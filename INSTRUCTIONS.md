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
3. To **interrupt**, simply say: **“stop”** (not just any sound).
4. The assistant will cancel the response and start listening again.

---

## ⚠️ Troubleshooting

- ❌ **“Endpoint not found”**  
  → Make sure you're sending a POST request to `/chat` from the frontend.

- ❌ **Voice not working**  
  → Ensure microphone access is granted and `SpeechSynthesis` voices are loaded.

- 🛑 **Assistant stops on noise**  
  → Calibrate threshold or switch to "stop"-based interruption (already implemented).

---

## 🎥 What to Show in Demo Video

1. Start the assistant and ask about Revolt Motors.
2. Mid-sentence, say “stop” — it should stop speaking.
3. Speak your new query and get the next response.
4. Show that latency is low (1–2 seconds ideally).

---

## 📩 Final Submission

- Upload video to **Google Drive** (with public access).
- Submit the **GitHub repo link** and **video link**.
