function InputGroup() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-300"
      />
      <input
        type="text"
        placeholder="Surname"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-300"
      />
    </div>
  );
}

export default InputGroup;