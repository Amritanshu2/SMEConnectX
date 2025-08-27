const PreLoader = () => {
  return (
    <div className="bg-green-50 flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-3 border-2 border-emerald-100 text-yellow-700 bg-white rounded-lg">
        SMEConnectX
        <span className="border-r-2 border-l-2 border-emerald-400 rounded-full mt-2 p-2 animate-spinSlow"></span>
      </div>
    </div>
  );
};

export default PreLoader;
