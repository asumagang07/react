import React from 'react';

const Background = ( { children } ) =>
{
    return (
        
        <body className="bg-white dark:bg-secondary-400 transition-all duration-150 ease-in-out h-screen">
            {children}
        </body>
    )
}

export default Background;