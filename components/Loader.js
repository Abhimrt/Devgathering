"use client"
import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loader, setloader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            console.log("first")
            setloader(false)
        }, 4000)
    }, [])


    const barStyle = {
        '--columns': '25% 0 10% 0 10% 0 10% 0 20% 0 10% 0 25%',
        '--total-length': 400,
    };

    const segments = [
        { name: 'segment-1', delay: 0, length: 20, depth: 0, type: 'aligned' },
        { name: 'segment-2', delay: 20, length: 30, depth: 0, type: 'front' },
        { name: 'segment-3', delay: 50, length: 10, depth: 30, type: 'aligned' },
        { name: 'segment-4', delay: 60, length: 50, depth: 30, type: 'back' },
        { name: 'segment-5', delay: 110, length: 10, depth: -20, type: 'aligned' },
        { name: 'segment-6', delay: 120, length: 60, depth: -20, type: 'front' },
        { name: 'segment-7', delay: 180, length: 10, depth: 40, type: 'aligned' },
        { name: 'segment-8', delay: 190, length: 70, depth: 40, type: 'back' },
        { name: 'segment-9', delay: 260, length: 20, depth: -30, type: 'aligned' },
        { name: 'segment-10', delay: 280, length: 50, depth: -30, type: 'front' },
        { name: 'segment-11', delay: 330, length: 30, depth: 20, type: 'aligned' },
        { name: 'segment-12', delay: 360, length: 20, depth: 20, type: 'back' },
        { name: 'segment-13', delay: 380, length: 20, depth: 0, type: 'aligned' },
    ];

    const renderSegments = () => {
        return segments.map((segment, index) => (
            <div
                key={index}
                style={{
                    '--name': segment.name,
                    '--delay': segment.delay,
                    '--length': segment.length,
                    '--depth': segment.depth,
                }}
                className={`bar__segment bar__segment--${segment.type}`}
            ></div>
        ));
    };

    return (
        <>
            {
                loader && <div className="loader">
                    <input className='sr-only' type='checkbox' id='flip' />
                    <label htmlFor='flip'></label>
                    <h1>tap.</h1>
                    <div className='container'>
                        <div className='scene'>
                            <span className='loading-label'>Loading...</span>
                            <div className='bar' style={barStyle}>
                                {renderSegments()}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Loader;
