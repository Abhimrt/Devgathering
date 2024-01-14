import Link from 'next/link'
import React from 'react'

const MultipleButton = ({ portal, setshow }) => {
    return (
        <div className='w-screen flex justify-center items-center my-10 Mbutton gap-8 flex-wrap'>
            {
                portal.map((e, i) => (
                    <Link href={`/#${e}`} className='active' key={i} onClick={() => setshow(e)}>
                        {e}
                    </Link>
                ))
            }
        </div>
    )
}

export default MultipleButton