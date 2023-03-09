import classNames from "classnames";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, LineElement, PointElement} from 'chart.js'
import { DeviceService } from "@prototypeIIot/lib/services/deviceSevice";
import { Line } from 'react-chartjs-2';
import { EventService } from "@prototypeIIot/lib/services/eventService";
ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend,   
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
 );

export const LineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

export default function DashboardComponent() {
    const deviceSevice = new DeviceService();
    const eventService = new EventService();

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-white border border-gray-200  rounded-lg shadow-xl p-6">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-700">No. Of Gateways</h2>
                            <p className="font-bold text-3xl">2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-white border border-gray-200  rounded-lg shadow-xl p-6">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-700">No. Of Sensors/Cameras</h2>
                            <p className="font-bold text-3xl">10</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-white border border-gray-200  rounded-lg shadow-xl p-6">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-700">Regist    ered Users</h2>
                            <p className="font-bold text-3xl">14</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-white border border-gray-200  rounded-lg shadow-xl p-6">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-700">File Storage: 500 GB</h2>
                                <Doughnut data={deviceSevice.getDeviceStorageInfo()} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-white border border-gray-200  rounded-lg shadow-xl p-6">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-700">No. Of Devices</h2>
                                <Doughnut data={deviceSevice.getDeviceTypeInfo()} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div className="bg-white border border-gray-200  rounded-lg shadow-xl p-6">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-700">Device Uptime</h2>
                                <Doughnut data={deviceSevice.getDeviceUptimeInfo()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap flex-grow mt-2">
                <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600"> Average Requests</h2>
                        </div>
                        <div className="p-5">
                            <Line options={LineOptions} data={deviceSevice.getDeviceRequestData()} />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Device Events</h2>
                        </div>
                        <div className="p-5">
                            <Line options={LineOptions} data={eventService.getDeviceRequestData()} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}