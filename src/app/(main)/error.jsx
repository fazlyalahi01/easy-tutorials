'use client'; // Error components must be Client Components

import CustomToast from '@/components/custom-toast';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
        if (error) {
            // toast.error(error.message);
            alert(error.message);
        }
    }, [error]);

    return (
        <div className='text-center pt-12'>
            <p>Something went wrong. Please check the following error and try again</p>
            <p className='text-red-500 pb-4'>Error: {error.message}</p>
            <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </div>
    );
}
