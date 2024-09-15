import React, { useState } from "react";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    { 
      id: 1, 
      question: "How is Tangerine healthy?", 
      answer: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.", 
      image: "/images/tangerine.png" // Example static image
    },
  ]);

  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "", image: "" });
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(null);

  // Handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Preview the uploaded image
        setNewFAQ({ ...newFAQ, image: reader.result });
      };
      reader.readAsDataURL(file); // Convert image file to base64 string
    }
  };

  // Add a new FAQ
  const handleAddFAQ = () => {
    setFaqs([...faqs, { ...newFAQ, id: Date.now() }]);
    setNewFAQ({ question: "", answer: "", image: "" });
    setImagePreview(null);
  };

  // Delete FAQ
  const handleDeleteFAQ = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  // Edit FAQ
  const handleEditFAQ = (id) => {
    const faqToEdit = faqs.find((faq) => faq.id === id);
    setNewFAQ(faqToEdit);
    setImagePreview(faqToEdit.image); // Set preview to the current image
    setIsEditing(id);
  };

  // Update FAQ
  const handleUpdateFAQ = () => {
    setFaqs(
      faqs.map((faq) => (faq.id === isEditing ? newFAQ : faq))
    );
    setNewFAQ({ question: "", answer: "", image: "" });
    setImagePreview(null);
    setIsEditing(null);
  };

  return (
    <div className="p-4 bg-gradient-to-b from-purple-400 via-blue-300 to-blue-200 min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-center">FAQ Section</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center">
          <img 
            src={faq.image} 
            alt="FAQ related" 
            className="w-16 h-16 mr-4 rounded-full object-cover" 
          />
          <div>
            <h2 className="font-bold text-red-500 text-lg">{faq.question}</h2>
            <p className="text-sm text-gray-600">{faq.answer}</p>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => handleEditFAQ(faq.id)}
                className="text-blue-500 mr-4 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteFAQ(faq.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
        <input
          type="text"
          placeholder="Question"
          value={newFAQ.question}
          onChange={(e) =>
            setNewFAQ({ ...newFAQ, question: e.target.value })
          }
          className="w-full p-2 mb-2 border border-gray-300 rounded text-sm"
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFAQ.answer}
          onChange={(e) =>
            setNewFAQ({ ...newFAQ, answer: e.target.value })
          }
          className="w-full p-2 mb-2 border border-gray-300 rounded text-sm"
        />
        <input
          type="file"
          onChange={handleImageUpload}
          className="w-full p-2 mb-2 border border-gray-300 rounded text-sm"
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="w-16 h-16 rounded-full object-cover mb-2" />
        )}
        {isEditing ? (
          <button
            onClick={handleUpdateFAQ}
            className="w-full bg-blue-500 text-white text-sm px-4 py-2 rounded"
          >
            Update FAQ
          </button>
        ) : (
          <button
            onClick={handleAddFAQ}
            className="w-full bg-green-500 text-white text-sm px-4 py-2 rounded"
          >
            Add FAQ
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
