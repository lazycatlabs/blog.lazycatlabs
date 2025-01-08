export default function Search({ onChange }) {
  return (
    <div className="relative max-w-sm overflow-hidden">
      <input
        aria-label="Search articles"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles"
        className="w-full input input-bordered px-4 py-2  rounded-md"
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-text"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}
