import React from 'react';

function ProcessComparison() {
  return (
    <div className="w-full h-full flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-10">
      <div className="w-full max-w-md">
        <div className="relative h-[400px] bg-gray-50 rounded-[2rem] p-8 shadow-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Are you tired of this?
          </h3>

          <div className="absolute left-8 top-20 z-10 animate-float-slow">
            <div className="bg-red-100 rounded-full px-4 py-2 text-sm text-red-700 shadow-lg">
              Phone calls
            </div>
          </div>

          <div className="absolute right-16 top-28 z-10 animate-float-medium">
            <div className="bg-orange-100 rounded-full px-4 py-2 text-sm text-orange-700 shadow-lg">
              "Yes, I'll hold"
            </div>
          </div>

          <div className="absolute left-24 top-40 z-10 animate-float-fast">
            <div className="bg-yellow-100 rounded-full px-4 py-2 text-sm text-yellow-700 shadow-lg">
              "Can I get a quote for..."
            </div>
          </div>

          <div className="absolute right-20 top-56 z-10 animate-float-medium">
            <div className="bg-green-100 rounded-full px-4 py-2 text-sm text-green-700 shadow-lg">
              "Please email the forms"
            </div>
          </div>

          <div className="absolute left-12 top-72 z-10 animate-float-slow">
            <div className="bg-blue-100 rounded-full px-4 py-2 text-sm text-blue-700 shadow-lg">
              "Did you fill out the forms?"
            </div>
          </div>

          <div className="absolute right-16 top-[340px] z-10 animate-float-fast">
            <div className="bg-purple-100 rounded-full px-4 py-2 text-sm text-purple-700 shadow-lg">
              "Let me transfer you..."
            </div>
          </div>

          <div className="absolute left-28 bottom-28 z-10 animate-float-medium">
            <div className="bg-pink-100 rounded-full px-4 py-2 text-sm text-pink-700 shadow-lg">
              "Our systems are down"
            </div>
          </div>

          <div className="absolute right-12 bottom-44 z-10 animate-float-slow">
            <div className="bg-indigo-100 rounded-full px-4 py-2 text-sm text-indigo-700 shadow-lg">
              "Call back tomorrow"
            </div>
          </div>

          <div className="absolute left-16 bottom-12 z-10 animate-float-fast">
            <div className="bg-teal-100 rounded-full px-4 py-2 text-sm text-teal-700 shadow-lg">
              "Visit our office"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessComparison;