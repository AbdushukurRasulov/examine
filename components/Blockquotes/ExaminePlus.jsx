import Link from 'next/link'

const ExaminePlus = () => {
  return (
    <div className="bg-examine-yellow-200 border-examine-yellow-premium space-y-6 rounded-l-lg border-l-8 py-10 px-6 md:py-14 md:px-50px">
      <span className="bg-examine-yellow-premium inline-flex items-center rounded px-2 font-medium tracking-1 text-examine-purple-600">
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.36828 13.1957C3.03743 13.3689 2.662 13.0653 2.72885 12.6777L3.44028 8.53893L0.420569 5.60243C0.138569 5.32768 0.28514 4.82543 0.66314 4.77118L4.86143 4.16218L6.73343 0.376055C6.90228 0.0348047 7.35914 0.0348047 7.528 0.376055L9.4 4.16218L13.5983 4.77118C13.9763 4.82543 14.1229 5.32768 13.8409 5.60243L10.8211 8.53893L11.5326 12.6777C11.5994 13.0653 11.224 13.3689 10.8931 13.1957L7.12943 11.2217L3.36743 13.1957H3.36828Z"
            fill="#562E69"
          />
        </svg>
        Examine Plus
      </span>

      <h3 className="font-lora font-medium">Stay on top of the latest research</h3>
      <p>
        To unlock the full archives of our Study Database and research analyses, become an Examine
        Member today.
      </p>
      <Link href="/">
        <a className="block  rounded bg-primary py-3 text-center -tracking-2 text-white hover:bg-examine-purple-400 md:text-xl md:leading-9">
          Start your 14-day free trial
        </a>
      </Link>
    </div>
  )
}

export default ExaminePlus
