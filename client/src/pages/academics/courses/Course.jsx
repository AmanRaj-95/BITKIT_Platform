import React, { useEffect } from "react";
import { message, Button } from "antd";
import { Link } from "react-router-dom";

function Course() {
  //   useEffect(() => {
  //   message.info("Academic syllabus based on NEP 2020 guidelines");
  // }, []);
    useEffect(() => {
        const key = 'nep-info';

        message.open({
            key,
            type: 'info',
            duration: 3, // auto-close after 5 seconds
            content: (
                <div className="flex items-center justify-between gap-4">
                    <span>Academic syllabus based on NEP 2020 guidelines</span>
                    <Button
                        size="small"
                        type="text"
                        onClick={() => message.destroy(key)}
                    >
                        ❌
                    </Button>
                </div>
            ),
        });
    }, []);
    return (
        <div>
            <div className="max-w-screen-2xl container mx-auto md:px-5">
                <div className="items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-pink-500 md:mt-1">
                        Branches
                    </h1>
                    <p className="mt-3 text-white">Select Your Branch</p>
                </div>
            </div>
            <div className="md:max-w-screen-4xl container mx-auto md:px-5 mt-7">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Use Link instead of a */}
                    <Link to="/course/cse">
                        <Card image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200" label="CSE" />
                    </Link>

                    <Link to="/course/aiml">
                        <Card image="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=900&auto=format&fit=crop&q=60" label="AIML" />
                    </Link>

                    <Link to="/course/ece">
                        <Card image="https://cdn.pixabay.com/photo/2023/04/03/19/37/soldering-7897827_1280.jpg" label="ECE" />
                    </Link>

                    <Link to="/course/eee">
                        <Card image="https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=900&auto=format&fit=crop&q=60" label="EEE" />
                    </Link>

                    <Link to="/course/me">
                        <Card image="https://plus.unsplash.com/premium_photo-1664910842853-0d643f6db30c?w=900&auto=format&fit=crop&q=60" label="ME" />
                    </Link>

                    <Link to="/course/chem">
                        <Card image="https://cdn.pixabay.com/photo/2017/03/13/21/41/scientist-2141259_1280.jpg" label="CHEMICAL" />
                    </Link>

                    <Link to="/course/civil">
                        <Card image="https://images.unsplash.com/photo-1694521787193-9293daeddbaa?w=900&auto=format&fit=crop&q=60" label="CIVIL" />
                    </Link>

                    <Link to="/course/biotech">
                        <Card image="https://cdn.pixabay.com/photo/2022/04/07/03/33/research-7116736_1280.jpg" label="BIO-TECH" />
                    </Link>

                    <Link to="/course/prod">
                        <Card image="https://cdn.pixabay.com/photo/2017/11/20/08/11/welder-2964752_1280.jpg" label="Production" />
                    </Link>

                    <Link to="/course/food">
                        <Card image="https://cdn.pixabay.com/photo/2020/06/02/18/10/noodles-5252012_1280.jpg" label="Food Eng." />
                    </Link>

                </div>
            </div>
        </div>
    );
}

const Card = ({ image, label }) => (
    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
        <figure className="w-full aspect-[4/3] overflow-hidden">
            <img src={image} alt={label} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between">
            <div>{/* Optional: Add title or description */}</div>
            <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-sm">{label}</button>
            </div>
        </div>
    </div>
);

export default Course;
