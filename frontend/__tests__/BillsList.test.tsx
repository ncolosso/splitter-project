// __tests__/BillsList.test.tsx
import {render, waitFor} from '@testing-library/react';
import BillsList from '../src/components/BillsList';

// Mocking the getBills function
jest.mock('../src/api/billService', () => ({
    getBills: jest.fn().mockResolvedValue({data: []}),
}));

// Mocking the child components
jest.mock('../src/components/NewBillForm', () => () => <div/>);
jest.mock('../src/components/BillRow', () => () => <div/>);

test('renders without crashing', async () => {
    await waitFor(() => {
        const {container} = render(<BillsList/>);
        // Check if component rendered
        expect(container).toBeTruthy();
    });
});
