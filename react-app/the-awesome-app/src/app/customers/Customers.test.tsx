import { json } from 'stream/consumers';
import {Customers} from './page';
import { render ,screen} from '@testing-library/react';

beforeEach(()=>{
    fetchMock.resetMocks();
})

test("render customers", async ()=>{

    const mockCustomers =[
        {id:1,name:"CUST 1",location:"mumbai"},
        {id:1,name:"CUST 2",location:"chennai"},
    ]

    fetchMock.mockResponse(JSON.stringify(mockCustomers));

    render(await Customers({timeout:1000}))
    const customer1 = screen.getByText("CUST 2");
    expect(customer1).toBeInTheDocument();


}
)
