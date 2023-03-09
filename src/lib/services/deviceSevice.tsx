import { faker } from "@faker-js/faker";

export class DeviceService {
    constructor() {
        //mock pass authorization
    }
    //mock fetch api response
    getDeviceStorageInfo() {
        return {
            labels: ['Videos', 'Images', 'Others'],
            datasets: [
            {
                label: '# of files',
                data: [12, 19, 3,],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
            ],
        };
    }

    getDeviceTypeInfo() {
        return {
            labels: ['Humidity Sensors', 'Temperature Sensors', 'Gateways','Cameras'],
            datasets: [
            {
                label: '# of devices',
                data: [3, 3, 2, 4],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
            ],
        };
    }

    getDeviceUptimeInfo() {
        return {
            labels: ['Offline', 'Online'],
            datasets: [
            {
                label: '# of devices',
                data: [4, 8],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
            ],
        };
    }

    getDeviceRequestData() {
        const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return {
            labels,
            datasets: [
              {
                label: 'Average Success Requests',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
    
              {
                label: 'Average Failed Requests',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
    
            ],
          };
    }

}
  