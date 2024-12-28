"use client";
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Cards from "@/app/Reuseable Components/Cards";

const dataset = [
    {
        version: 'data-0',
        a1: 329.39,
        a2: 391.29,
        b1: 443.28,
        b2: 153.9,
    },
    {
        version: 'data-1',
        a1: 96.94,
        a2: 139.6,
        b1: 110.5,
        b2: 217.8,
    },
    {
        version: 'data-2',
        a1: 336.35,
        a2: 282.34,
        b1: 175.23,
        b2: 286.32,
    },
    {
        version: 'data-3',
        a1: 159.44,
        a2: 384.85,
        b1: 195.97,
        b2: 325.12,
    },
    {
        version: 'data-4',
        a1: 188.86,
        a2: 182.27,
        b1: 351.77,
        b2: 144.58,
    },
    {
        version: 'data-5',
        a1: 143.86,
        a2: 360.22,
        b1: 43.253,
        b2: 146.51,
    },
    {
        version: 'data-6',
        a1: 202.02,
        a2: 209.5,
        b1: 376.34,
        b2: 309.69,
    },
    {
        version: 'data-7',
        a1: 384.41,
        a2: 258.93,
        b1: 31.514,
        b2: 236.38,
    },
    {
        version: 'data-8',
        a1: 256.76,
        a2: 70.571,
        b1: 231.31,
        b2: 440.72,
    },
    {
        version: 'data-9',
        a1: 143.79,
        a2: 419.02,
        b1: 108.04,
        b2: 20.29,
    },
];

const chartSetting = {
    yAxis: [
        {
            label: 'Events Evaluation',
        },
    ],
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
    width: 600,
    height: 400,
};

export default function page() {

    return (
        <div>
            <div>
                <Cards />
            </div>
            <div className="mb-5 px-8">
                <div className="mt-10">
                    <h1 className="text-2xl lg:text-4xl text-center font-bold tracking-wide">Analytics</h1>
                </div>

                <div className='w-full lg:w-[100%] flex justify-center mt-10'>
                    <div className='w-full lg:w-[80%] border-[1px] border-gray-300 rounded-xl'>
                    <ScatterChart
                        dataset={dataset}
                        series={[
                            { datasetKeys: { id: 'version', x: 'a1', y: 'a2' }, label: 'Series A' },
                            { datasetKeys: { id: 'version', x: 'b1', y: 'b2' }, label: 'Series B' },
                        ]}
                        {...chartSetting}
                        className="w-full lg:h-[600px]"
                    />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
