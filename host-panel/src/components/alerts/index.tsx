import React from 'react'
type AlertVariants = "Dark" | "Secondary" | "Info" | "Success" | "Warning" | "Light" | "Danger"

const Alerts = ({ strongText, text, variant }: { text: string, strongText?: string, variant?: AlertVariants }) => {
    let className = "mt-2 bg-gray-100 border border-gray-200 text-sm text-gray-800 rounded-lg p-4 dark:bg-white/10 dark:border-white/20 dark:text-white";
    switch (variant) {
        case "Secondary":
            className = "mt-2 bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg p-4 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400"
            break;
        case "Info":
            className = "mt-2 bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500"
            break;
        case "Success":
            className = "mt-2 bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500"
            break;
        case "Warning":
            className = "mt-2 bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
            break;
        case "Light":
            className = "mt-2 bg-white/10 border border-white/10 text-sm text-white rounded-lg p-4"
            break;
        case "Danger":
            className = "mt-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
            break
        default:
            className = className;
            break;
    }
    return (
        <div
            className={className}
            role="alert"
            tabIndex={-1}
            aria-labelledby={`hs-soft-color-${(variant || "Dark")?.toLocaleLowerCase()}-label`}
        >
            {strongText && (<span id="hs-soft-color-dark-label" className="font-bold">
                Dark
            </span>)}
            {" "}{text}
        </div>
    )
}
Alerts.WithList = ({ text, list, variant }: { text: string, list: string[], variant?: AlertVariants }) => (
    <div
        className="bg-red-50 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-with-list-label"
    >
        <div className="flex">
            <div className="shrink-0">
                <svg
                    className="shrink-0 size-4 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                </svg>
            </div>
            <div className="ms-4">
                <h3 id="hs-with-list-label" className="text-sm font-semibold">
                    {text}
                </h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                    <ul className="list-disc space-y-1 ps-5">
                        {list.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
Alerts.WithDescription = ({ text, description, variant }: { text: string, description: string, variant?: AlertVariants }) => (
    <div
        className="bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-with-description-label"
    >
        <div className="flex">
            <div className="shrink-0">
                <svg
                    className="shrink-0 size-4 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                </svg>
            </div>
            <div className="ms-4">
                <h3 id="hs-with-description-label" className="text-sm font-semibold">
                    {text}
                </h3>
                <div className="mt-1 text-sm text-yellow-700">
                    {description}
                </div>
            </div>
        </div>
    </div>

)
Alerts.WithActions = ({ text, description, onAllowClick, onDenyClick }: { text: string, description: string, onAllowClick?: () => void, onDenyClick?: () => void }) => (
    <div
        className="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-actions-label"
    >
        <div className="flex">
            <div className="shrink-0">
                <svg
                    className="shrink-0 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
            </div>
            <div className="ms-3">
                <h3 id="hs-actions-label" className="font-semibold">
                    {text}
                </h3>
                <div className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    {description}
                </div>
                <div className="mt-4">
                    <div className="flex gap-x-3">
                        <button
                            type="button"
                            onClick={onDenyClick}
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                        >
                            Don't allow
                        </button>
                        <button
                            type="button"
                            onClick={onAllowClick}

                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                        >
                            Allow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
Alerts.WithLinkOnRight = ({ text, rightSideText, variant }: { text: string, rightSideText: string, variant?: AlertVariants }) => (
    <div
        className="bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg p-4 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-link-on-right-label"
    >
        <div className="flex">
            <div className="shrink-0">
                <svg
                    className="shrink-0 size-4 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
            </div>
            <div className="flex-1 md:flex md:justify-between ms-2">
                <p id="hs-link-on-right-label" className="text-sm">
                    {text}
                </p>
                <p className="text-sm mt-3 md:mt-0 md:ms-6">
                    <a
                        className="text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 font-medium whitespace-nowrap dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        href="#"
                    >
                        {rightSideText}
                    </a>
                </p>
            </div>
        </div>
    </div>


)
Alerts.Default = ({ text, description, variant }: { text: string, description: string, variant?: AlertVariants }) => (
    <div
        className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 dark:bg-neutral-800 dark:border-neutral-700"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-discovery-label"
    >
        <div className="flex">
            <div className="shrink-0">
                <svg
                    className="shrink-0 size-4 text-blue-600 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
            </div>
            <div className="ms-3">
                <h3
                    id="hs-discovery-label"
                    className="text-gray-800 font-semibold dark:text-white"
                >
                    {text}
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-neutral-400">
                    {description}.
                </p>
            </div>
        </div>
    </div>



)
Alerts.Bordered = ({ text, description, variant = "Success" }: { text: string, description: string, variant?: "Success" | "Error" }) => {

    return (
        <div className="space-y-5">
            {variant === "Success" && (
                <div
                    className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
                    role="alert"
                    tabIndex={-1}
                    aria-labelledby="hs-bordered-success-style-label"
                >
                    <div className="flex">
                        <div className="shrink-0">
                            {/* Icon */}
                            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </span>
                            {/* End Icon */}
                        </div>
                        <div className="ms-3">
                            <h3
                                id="hs-bordered-success-style-label"
                                className="text-gray-800 font-semibold dark:text-white"
                            >
                                {text}.
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-neutral-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {variant === "Error" && (<div
                className="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30"
                role="alert"
                tabIndex={-1}
                aria-labelledby="hs-bordered-red-style-label"
            >
                <div className="flex">
                    <div className="shrink-0">
                        {/* Icon */}
                        <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </span>
                        {/* End Icon */}
                    </div>
                    <div className="ms-3">
                        <h3
                            id="hs-bordered-red-style-label"
                            className="text-gray-800 font-semibold dark:text-white"
                        >
                            {text}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-neutral-400">
                            {description}
                        </p>
                    </div>
                </div>
            </div>)}
        </div>




    )
}
export default Alerts
