import React, { useState } from 'react';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('es'); // Default to Spanish (es)
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'hi', name: 'Hindi' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'ru', name: 'Russian' },
    // Add more languages as needed
  ];

  // Handle translation logic
  const handleTranslate = async () => {
    if (!inputText) return;
    
    setLoading(true);
    try {
      // API for Google Translate or similar
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURI(inputText)}`
      );
      const data = await response.json();
      setTranslatedText(data[0][0][0]);
    } catch (error) {
      console.error('Error fetching translation:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-b  from-blue-400 to-purple-400 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-black mb-6">Translator</h1>

      <div className="bg-white h-full   p-6  w-full max-w-lg">
        <div >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter Text to Translate:
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your text here..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Language:
          </label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <button
            onClick={handleTranslate}
            disabled={!inputText || loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Translating...' : 'Translate'}
          </button>
        </div>

        {translatedText && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-700">Translated Text:</h3>
            <p className="text-gray-900 mt-2">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
