import React from 'react';

function Cards({item}) {
    console.log(item);
    return (
        <div className='mt-4 my-4 p-2'>
            <div className="card w-65 bg-base-200 shadow-2xl transition=transform durration-400 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
                <figure className="flex justify-center mt-4">
                    <img
                        src={item.image}
                        alt={item.image}
                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                        />
                </figure>
                <div className="card-body">
                    <h6 className="card-title text-base font-semibold mx-auto">
                        {item.name}</h6>
                        <div className="badge badge-secondary mx-auto">{item.Title}</div>
                    {item.Roll_Number ? (
                        <p className='mx-auto'>Roll No - {item.Roll_Number}</p>
                    ) : item.Faculty ? (
                        <p className='mx-auto'>Mentor - {item.Faculty}</p>
                    ) : null}
                    <div className="card-actions mx-auto">
                        <a href={item.Profile} target="_blank" rel="noopener noreferrer">
                        <div className="badge badge-outline bg-[#0077B5] text-white hover:bg-[#005582] duration-200">LinkedIn
                        </div>
                        </a>
                    </div>
                    {item.Section ? 
                    <div className='text-center font-semibold'>Section - {item.Section}</div>
                    :
                    null
                    }
                    {item.Role ? 
                    <div className='text-center font-semibold'>Role - {item.Role}</div>
                : null}
                </div>
            </div>
        </div>
    )
}

export default Cards;
