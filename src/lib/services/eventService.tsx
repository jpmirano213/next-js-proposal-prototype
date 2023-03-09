import { faker } from "@faker-js/faker";

export class EventService {
    constructor() {
        //mock pass authorization
    }
    //mock fetch api response

    getDeviceRequestData() {
        const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return {
            labels,
            datasets: [
              {
                label: 'No of device events',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
    
    
            ],
          };
    }
}
  