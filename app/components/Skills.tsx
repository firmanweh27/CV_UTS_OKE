import React from 'react';

const skillsData = [
    { name: 'Editing foto ', percentage: 80 },
    { name: 'Menggambar', percentage: 70 },
    { name: 'Gaming', percentage: 80 },
    { name: 'Tidur', percentage: 60 },
    { name: 'Renang', percentage: 90 },
];

const Skills = () => {
    return (
        <div className="container mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Skills</h2>

            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-xl shadow-lg">
                {skillsData.map((skill, index) => (
                    <div key={index} className="mb-5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                            <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                        </div>
                        <div className="relative w-full bg-gray-300 rounded-full h-3">
                            <div
                                className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                                style={{ width: `${skill.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
