function Icon() {
  return (
    <div className="absolute right-[5%] pt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="text-white h-12 w-12"
      >
        <circle
          cx="0"
          cy="0"
          r="0"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="6"
          fill="red"
          className="group-hover:bg-red-500"
        />
        <path
          stroke-width="2"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
        />
      </svg>
    </div>
  );
}

export default Icon;
