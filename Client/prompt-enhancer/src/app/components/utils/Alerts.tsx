import React, { ReactNode } from 'react'

interface AlertProps {
    type: 'info' | 'warning' | 'error'; // Define alert types
    message: string; // Message to display
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
    let alertClass = '';
    let iconPath = '';

    // Determine classes and icon based on alert type
    switch (type) {
        case 'info':
            alertClass = 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400';
            iconPath = 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z';
            break;
        case 'warning':
            alertClass = 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400';
            iconPath = '...'; // Add warning icon path
            break;
        case 'error':
            alertClass = 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400';
            iconPath = '...'; // Add error icon path
            break;
        default:
            alertClass = 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400';
            iconPath = '...'; // Default icon path
    }

    return (
        <div className={`flex items-center p-4 mb-4 text-sm rounded-lg ${alertClass}`} role="alert">
            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d={iconPath} />
            </svg>
            <span className="sr-only">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            <div>
                <span className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} alert!</span> {message}
            </div>
        </div>
    )
}

export default Alert;