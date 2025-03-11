import TimePickerWheels from "@/components/time-picker/time-picker-wheels";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Time Picker Wheels Demo
          </h1>
          <p className="text-xl text-gray-300">
            An innovative time selection interface with smooth animations and
            intuitive controls
          </p>
        </div>

        <div className="flex justify-center p-8">
          <TimePickerWheels />
        </div>

        <div className="bg-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Intuitive wheel-based time selection</li>
            <li>Smooth animations and transitions</li>
            <li>Keyboard accessible navigation</li>
            <li>Responsive design that works on all devices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
