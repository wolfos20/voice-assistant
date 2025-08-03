

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
console.log("✅ Starting server...");
console.log("🔑 GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
});

// Health check endpoint
app.head('/chat', (req, res) => {
  res.status(200).send();
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', message);

    // Get the generative model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Create a chat session for better context handling
   const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{
        text:
`You are an AI voice assistant strictly trained to only answer questions related to Revolt Motors.

- If a question is about Revolt Motors (its bikes, specs, service, prices, company, policies), respond helpfully.
- If a question is about anything else (unrelated brands, personal advice, general topics), politely say:
"I'm here to assist only with Revolt Motors information. Could you please ask something related to Revolt?"

Avoid markdown formatting. Keep replies short, spoken-friendly, and polite.`
      }]
    },
    {
      role: "model",
      parts: [{
        text: "Hi! I’m your Revolt Motors assistant. Ask me anything about our electric bikes, service, or features!"
      }]
    }
  ]
});


    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const reply = response.text();

    console.log('Generated reply:', reply);

    res.json({ 
      reply: reply,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing chat request:', error);
    
    // Handle specific API errors
    if (error.message.includes('API_KEY')) {
      return res.status(401).json({ 
        error: 'Invalid API key. Please check your Gemini API key.' 
      });
    }
    
    if (error.message.includes('quota')) {
      return res.status(429).json({ 
        error: 'API quota exceeded. Please try again later.' 
      });
    }

    res.status(500).json({ 
      error: 'Sorry, I encountered an error processing your request. Please try again.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🤖 Gemini Voice Assistant ready!`);
  
  // Check if API key is configured
  if (!process.env.GEMINI_API_KEY) {
    console.warn('⚠️  WARNING: GEMINI_API_KEY not found in environment variables');
    console.warn('   Please add your API key to the .env file');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Server shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Server shutting down gracefully...');
  process.exit(0);
});