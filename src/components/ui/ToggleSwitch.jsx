export default function ToggleSwitch({ isOn, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-12 sm:w-11 md:w-13 px-0.5 sm:px-0.5 md:px-0.75 h-6 sm:h-5.5 md:h-6.5 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-custum-red-700' : 'bg-custum-neutral-300'
      }`}
    >
      <div
        className={`w-5 h-5 sm:w-4.5 sm:h-4.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn 
            ? 'translate-x-6 sm:translate-x-5.5 md:translate-x-7' 
            : 'translate-x-0.5 sm:translate-x-0.5 md:translate-x-0.75'
        }`}
      />
    </div>
  );
}
