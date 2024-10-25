import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Interactions = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Drug Interactions Check</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Check Drug Interactions</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
              Select Medications
            </label>
            <select
              id="medications"
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              size={5}
            >
              <option>Aspirin</option>
              <option>Ibuprofen</option>
              <option>Paracetamol</option>
              <option>Amoxicillin</option>
              <option>Omeprazole</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Check Interactions
            </button>
          </div>

          <div className="mt-6">
            <div className="rounded-md bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Potential Interaction Detected
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Aspirin + Ibuprofen: These medications may increase the risk of bleeding when used together.
                      Consider alternative pain relief options or consult with a healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactions;