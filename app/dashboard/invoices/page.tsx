export default function Page() {
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Invoice Number
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Client
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Amount
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Due Date
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* We'll need to fetch and map over invoice data here */}
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">INV-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">Client A</td>
                    <td className="px-6 py-4 whitespace-nowrap">$1000</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-06-30</td>
                    <td className="px-6 py-4 whitespace-nowrap">Pending</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">INV-002</td>
                    <td className="px-6 py-4 whitespace-nowrap">Client B</td>
                    <td className="px-6 py-4 whitespace-nowrap">$1500</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-07-15</td>
                    <td className="px-6 py-4 whitespace-nowrap">Paid</td>
                </tr>
                {/* Add more rows as needed */}
            </tbody>
        </table>
    )
}
