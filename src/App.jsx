import { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [macros, setMacros] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    // Placeholder for GPT call
    setMacros({
      calories: 550,
      protein: 35,
      carbs: 40,
      fat: 20,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">NutriNinja 🥷</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border rounded p-2"
        />

        {image && (
          <img
            src={image}
            alt="Meal"
            className="w-full rounded-lg object-cover mt-2"
          />
        )}

        <textarea
          placeholder="Describe your meal..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded p-2 mt-2"
          rows={3}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Analyze Meal
        </button>

        {macros && (
          <div className="pt-4 border-t text-lg space-y-1">
            <p><strong>Calories:</strong> {macros.calories}</p>
            <p><strong>Protein:</strong> {macros.protein}g</p>
            <p><strong>Carbs:</strong> {macros.carbs}g</p>
            <p><strong>Fat:</strong> {macros.fat}g</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
